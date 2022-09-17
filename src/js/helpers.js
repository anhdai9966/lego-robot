export function validateEmail(value, message) 
{
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value) ? undefined : message || 'Trường này phải là email.';
}

export function validatePhoneNumber(value, message) 
{
  return !isNaN(+value) ? undefined : message || 'Trường này phải là số điện thoại.';
}
export function validateName(value, message) 
{
  return value ? undefined : message || 'Trường này không được để trống.';
}