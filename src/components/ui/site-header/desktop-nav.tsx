import { NAVIGATION_ITEMS } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { Button } from "../button";

const DesktopNav = () => {
  return (
    <ul className="hidden gap-2 md:flex">
      {NAVIGATION_ITEMS.map((item, index) => (
        <li key={index}>
          <Button asChild variant={"ghost"} size={"sm"}>
            <Link href={item.path}>{item.title}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
