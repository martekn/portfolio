import { NAVIGATION_ITEMS } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { Button } from "../button";

const DesktopNav = () => {
  return (
    <div className="hidden gap-2 md:flex">
      {NAVIGATION_ITEMS.map((item, index) => (
        <Button asChild key={index} variant={"ghost"} size={"sm"}>
          <Link href={item.path}>{item.title}</Link>
        </Button>
      ))}
    </div>
  );
};

export default DesktopNav;
