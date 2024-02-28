import { emailRegex, nameRegex, passwordRegex } from "./regex";

export const requiredValidation = {
  required: "Required Field",
};

export const emailValidation = {
  required: "Required Email Field",
  pattern: {
    value: emailRegex,
    message: "Invalid Email",
  },
};

export const passwordValidation = {
  required: "Required Password Field",
  pattern: {
    value: passwordRegex,
    message: "Invalid Password",
  },
};

export const addreasValidation = {
  required: "Required Addreas Field",
  minLength: {
    value: 5,
    message: "Specify the shipping address",
  },
};

export const nameValidation = {
  required: "Required Field",
  pattern: {
    value: nameRegex,
    message: "Write your name",
  },
};

export const lastNameValidation = {
  required: "Required Field",
  pattern: {
    value: nameRegex,
    message: "Write your lastname",
  },
};
