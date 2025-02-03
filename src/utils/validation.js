const emailValidation = email => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email == '') {
    return {message: 'Please enter username', status: false};
  } else {
    return {message: '', status: true};
  }
  // if (emailRegex.test(email)) {
  //   return {message: '', status: true};
  // } else {
  //   return {message: 'Please enter valid email', status: false};
  // }
};

const passwordValidation = password => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password == '') {
    return {message: 'Please enter password', status: false};
  } else {
    return {message: '', status: true};
  }
  // if (passwordRegex.test(password)) {
  //   return {message: '', status: true};
  // } else {
  //   return {message: 'Please enter correct password', status: false};
  // }
};

export {emailValidation, passwordValidation};
