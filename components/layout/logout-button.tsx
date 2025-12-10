"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { logoutUser } from "@/actions/auth.action";
import { toast } from "sonner";

export default function LogoutButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setLoading(true);
    const { error, message } = await logoutUser();

    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }

    setLoading(false);
  };

  return (
    <Button
      className="w-22"
      variant="outline"
      disabled={loading}
      onClick={handleLogout}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : ""} Logout
    </Button>
  );
}
