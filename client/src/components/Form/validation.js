export const validation = (userData, errors) => {
  if (!userData.email) {
    errors.email = "Please enter your email";
  } else {
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/g.test(userData.email)) {
      if (userData.email.length < 36) {
        errors.email = "";
      } else {
        errors.email = "The email can't have more than 35 characters";
      }
    } else {
      errors.email = "You must use a valid email";
    }
  }

  if (!userData.password) {
    errors.password = "Please enter a password";
  } else {
    if (/^(?=.*[0-9])/g.test(userData.password)) {
      if (/^(?=.{6,8})/g.test(userData.password)) {
        errors.password = "";
      } else {
        errors.password = "Password must be have 6 to 8 characters";
      }
    } else {
      errors.password = "Password must contain a number";
    }
  }
};
