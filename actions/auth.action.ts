"use server";

import { prisma } from "@/db/prisma";
import { createClient } from "@/lib/supabase/server";
import { handleError } from "@/lib/utils";

export const loginUser = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { error: false, message: "Login successful" };
  } catch (error) {
    return handleError(error);
  }
};

export const logoutUser = async () => {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signOut();

    if (error) throw error;

    return { error: false, message: "Logout successful" };
  } catch (error) {
    return handleError(error);
  }
};

export const signupUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const { auth } = await createClient();

    const { data, error } = await auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    const userId = data.user?.id;

    if (!userId) throw new Error("Error signing up");

    // Add user to the database
    await prisma.user.create({
      data: {
        id: userId,
        email,
        name,
      },
    });

    return { error: false, message: "Signup successful" };
  } catch (error) {
    return handleError(error);
  }
};
