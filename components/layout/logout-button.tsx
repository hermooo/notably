"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function LogoutButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <Button
      className="w-22"
      variant="outline"
      disabled={loading}
      onClick={handleLogout}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
}
