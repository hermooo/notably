import { SignupForm } from "./signup-form";

export default function SignupPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 pt-20">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
