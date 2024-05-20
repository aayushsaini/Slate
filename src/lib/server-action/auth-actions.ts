"use server";

import { UserCredentialsType } from "../types";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

/**
 * Authenticates a user by logging them in with the provided email and password.
 *
 * @param {LoginFormType} email - The email of the user.
 * @param {LoginFormType} password - The password of the user.
 * @return {Promise<any>} - A promise that resolves to the response from the login API call.
 */
export async function actionLoginUser({
  email,
  password,
}: UserCredentialsType) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signInWithPassword({ email, password });
  return response;
}

/**
 * Signs up a user with the provided email and password.
 *
 * @param {SignUpFormType} email - The email of the user.
 * @param {SignUpFormType} password - The password of the user.
 * @return {Promise<any>} - A promise that resolves to the response from the sign up API call.
 */
export async function actionSignUpUser({
  email,
  password,
}: UserCredentialsType) {
  const supabase = createRouteHandlerClient({ cookies });
  // Alternate way to query db using supabase
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email);
  if (data?.length) return { error: { message: "User already exists", data } };
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}api/auth/callback`,
    },
  });
  return response;
}
