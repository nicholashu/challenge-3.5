"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/information", label: "Info" },
  { href: "/profile", label: "Profile" },
];

const Navbar = () => {
  const { signOut } = useUser();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/information" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-block">ALL THE RICKS!!!</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4">
            <Button variant="outline" size="sm" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Toggle menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 px-0">
              <div className="flex flex-col gap-6 p-4">
                <h2 className="font-semibold text-lg">ALL THE RICKS!!!</h2>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium hover:text-muted-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pt-4 border-t">
                  <button
                    onClick={signOut}
                    className="text-lg font-medium hover:text-muted-foreground transition-colors text-left"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;