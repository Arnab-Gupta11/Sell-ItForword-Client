import { z } from "zod";
//login
export const loginSchema = z.object({
  email: z.string().nonempty({ message: "Email is required." }).email({ message: "Invalid email address format." }),
  password: z.string().nonempty({ message: "Password is required." }),
});
export const loginFormDefaultValue = {
  email: "",
  password: "",
};
