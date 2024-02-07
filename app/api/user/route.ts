import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const saltRounds: number = Number(process.env.SALT_ROUNDS) | 5;

async function generatePasswordHash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  console.log("SALT", salt);
  const hash = await bcrypt.hash(password, salt);
  console.log("HASH", hash);
  return hash;
}

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

// to create a new user
export async function POST(req: NextRequest) {
  const body = await req.json();

  const { success } = signupFormSchema.safeParse(body);

  if (!success) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  return new NextResponse("User created Successfully", { status: 200 });
}

// get request to get alll users
