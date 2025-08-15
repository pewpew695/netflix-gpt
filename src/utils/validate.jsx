export const checkValidData = (email, password, name) => {
  if (name !== undefined && name !== null) {
    const isNameValid = /^[a-zA-Z\s'-]{2,}$/.test(name);
    if (!isNameValid) return "Name is not Valid";
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
