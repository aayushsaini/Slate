import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().describe("email").email("Invalid Email"),
  password: z.string().describe("password").min(6, "Password is required"),
});
