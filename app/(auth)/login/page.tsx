import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 pt-20">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
