export function validateEmail(mail) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

export default function validateFormData({ email, password, name }) {
  const errors = {};
  if (!email) {
    errors.email = "Email is required.";
  } else if (email && !validateEmail(email)) {
    errors.email = "Enter a valid email id.";
  }
  if (!name) {
    errors.name = "Name is required.";
  }
  if (!password) {
    errors.password = "Password is required.";
  }
  return errors;
}
