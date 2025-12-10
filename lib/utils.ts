import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return { error: true, message: error.message };
  }

  return { error: true, message: "An unknown error occurred" };
};
