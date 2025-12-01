import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Link href="/" className="text-3xl font-bold">
        Notably
      </Link>
    </header>
  );
}
