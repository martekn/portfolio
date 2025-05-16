"use client";

import React from "react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" customClose>
        <SheetHeader className="border-b border-primary-500/20 py-4 flex flex-row justify-between items-center">
          <SheetTitle className="font-accent font-normal">Menu</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <Cross2Icon />
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav>
          <ul className="flex p-4 flex-col ">
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index}>
                <Button variant={"ghost"} size={"lg"} asChild>
                  <Link
                    className={"w-full"}
                    href={item.path}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
