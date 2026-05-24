import * as yup from "yup";

export const SigninSchema = yup
  .object({
    username: yup.string().required(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "At least one lowercase letter is required")
      .matches(/[A-Z]/, "At least one uppercase letter is required")
      .matches(/[0-9]/, "At least one number is required")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "At least one special character is required",
      ),
  })
  .required();
