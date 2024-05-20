"use client";
import * as z from "zod";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginFormSchema } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/common/Loader";
import { actionLoginUser } from "@/lib/server-action/auth-actions";
import AppLogo from "@/components/common/AppLogo";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (
    formData
  ) => {
    // Todo: Move to try-catch block in the future
    const { error } = await actionLoginUser(formData);
    if (error) {
      form.reset();
      setSubmitError(error.message);
    } else {
      router.replace("/dashboard");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
      >
        <Link href="/" className="w-full flex justify-left items-center">
          <AppLogo alt="App logo" height={50} width={50} />
          <span className="font-semibold dark:text-white text-4xl first-letter:ml-2">
            Slate.io
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          An All-In-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          variant="btn-primary"
          className="w-full p-6"
          size="lg"
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Login"}
        </Button>
        <span className="self-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary">
            Sign up
          </Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
