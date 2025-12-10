import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";
import LogoutButton from "./logout-button";
import { cn } from "@/lib/utils";
import { getUser } from "@/lib/supabase/server";

export default async function Header({ className }: { className?: string }) {
  const user = await getUser();

  return (
    <header
      className={cn(
        "f bg-popover flex h-20 items-center justify-between border px-3 sm:px-8",
        className,
      )}
    >
      <Link href="/" className="text-3xl font-bold">
        Notably
      </Link>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button variant="outline" className="hidden sm:block" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
