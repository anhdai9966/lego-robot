import { TIMEOUT_SEC } from './config.js';

// tạo lỗi về thời gian yêu từ api
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Yêu cầu mất nhiều thời gian! Đã đợi hết ${s} giây`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
      
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    // tạo lỗi api
    if (!res.ok) throw new Error(`${res.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};

export function validateEmail(value, message) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value) ? undefined : message || 'Trường này phải là email.';
}

export function validatePhoneNumber(value, message) {
  return !isNaN(+value) ? undefined : message || 'Trường này phải là số điện thoại.';
}
export function validateName(value, message) {
  return value ? undefined : message || 'Trường này không được để trống.';
}
