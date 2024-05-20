import * as z from "zod";

const UserCredentialsSchema = z.object({
  email: z.string().describe("email").email("Invalid Email"),
  password: z.string().describe("password").min(6, "Password is required"),
});

const LoginFormSchema = z.object({
  email: z.string().describe("email").email("Invalid Email"),
  password: z.string().describe("password").min(6, "Password is required"),
});

const SignUpFormSchema = z
  .object({
    email: z.string().describe("User Email").email("Invalid email"),
    password: z
      .string()
      .describe("User Password")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Need manual zod inference while importing
export { LoginFormSchema, SignUpFormSchema, UserCredentialsSchema };

// Preferred way to add and assign types
export type LoginFormType = z.infer<typeof LoginFormSchema>;
export type SignUpFormType = z.infer<typeof SignUpFormSchema>;
export type UserCredentialsType = z.infer<typeof UserCredentialsSchema>;
