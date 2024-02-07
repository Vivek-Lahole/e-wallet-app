"use client";

import { Button } from "@/components/ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, GithubIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import axios from "axios";

const signupFormSchema = z.object({
  firstName: z
    .string({
      required_error: "FirstName is required!",
      invalid_type_error: "FirstName must be a string",
    })
    .min(2, {
      message: "Last name should have at least 2 characters.",
    })
    .max(20, {
      message: "Lastname cannot have more than 20 characters.",
    }),
  lastName: z
    .string({
      required_error: "FirstName is required!",
      invalid_type_error: "FirstName must be a string",
    })
    .min(2, {
      message: "Last name should have at least 2 characters.",
    })
    .max(20, {
      message: "Lastname cannot have more than 20 characters.",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, {
      message: "password should have at least 6 characters.",
    })
    .max(20, {
      message: "password cannot have more than 20 characters.",
    }),
  twoFactorAuth: z.boolean(),
});

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, {
      message: "password is required.",
    })
    .max(20, {
      message: "password is required.",
    }),
});

export function Authform() {
  const [showPassword, setShowPassword] = useState(false);

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      twoFactorAuth: false,
    },
  });

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function signupSubmit(values: z.infer<typeof signupFormSchema>) {
    const { email, firstName, lastName, password, twoFactorAuth } = values;
    const payload = {
      email,
      firstName,
      lastName,
      password,
      twoFactorAuth,
    };
    try {
      const res = await axios.post("/api/user", payload);
      // const data=res.data;/
      console.log(res.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  function loginSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <Tabs defaultValue="signin">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Sign-Up</TabsTrigger>
        <TabsTrigger value="signin">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup" className="w-full h-full overflow-y-auto">
        <Card>
          <CardHeader>
            <CardTitle>Sign-Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(signupSubmit)}>
                <div className="space-y-2">
                  <FormField
                    control={signupForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signupForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signupForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signupForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>password</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-1">
                            <Input
                              placeholder="......"
                              {...field}
                              type={showPassword ? "text" : "password"}
                            />
                            <Button
                              size={"icon"}
                              variant={"ghost"}
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            >
                              {showPassword && <Eye />}
                              {!showPassword && <EyeOff />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signupForm.control}
                    name="twoFactorAuth"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between">
                        <Label>Enable two-factor authentication ?</Label>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full mt-2"
                    variant={"outline"}
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex items-center justify-between space-x-2">
            <Button
              className="flex-1 flex items-center justify-center space-x-1"
              variant={"outline"}
            >
              <GithubIcon />
              <span>Github</span>
            </Button>
            <Button
              className="flex-1 flex items-center justify-center space-x-1"
              variant={"outline"}
            >
              <GithubIcon />
              <span>Github</span>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(loginSubmit)}>
                <div className="space-y-2">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@mail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>password</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-1">
                            <Input
                              placeholder="......"
                              {...field}
                              type={showPassword ? "text" : "password"}
                            />
                            <Button
                              size={"icon"}
                              variant={"ghost"}
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            >
                              {showPassword && <Eye />}
                              {!showPassword && <EyeOff />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full mt-2">
                    Login
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <Separator className="mb-3" />
          <CardFooter className="flex items-center justify-between space-x-2">
            <Button
              className="flex-1 flex items-center justify-center space-x-1"
              variant={"outline"}
            >
              <GithubIcon />
              <span>Github</span>
            </Button>
            <Button
              className="flex-1 flex items-center justify-center space-x-1"
              variant={"outline"}
            >
              <GithubIcon />
              <span>Github</span>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
