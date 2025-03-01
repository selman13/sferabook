import React from "react";
import Loqo from "../common/Loqo";
import Link from "next/link";
import MobileNav from "../common/MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="bg-red-800 p-2 flex gap-5 justify-between items-center text-white">
      <Loqo />

      <div className="hidden mx-5 gap-10 md:flex">
        <Link href="/books">Kitablar</Link>
        <Link href="/basket">Səbət</Link>
        <SignedOut>
          <SignInButton>
            <Link href="/login">Giriş</Link>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
