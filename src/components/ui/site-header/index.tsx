import React from "react";
import Container from "../container";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import Image from "next/image";

const SiteHeader = () => {
  return (
    <Container variant={"3xl"}>
      <header className="py-4 md:py-6 flex justify-between align-middle">
        <Link href="/" className="my-auto">
          <span className="sr-only">M.K. projects</span>
          <Image src={"/logo.png"} alt="" width={300} height={300} className="w-14 md:w-16" />
        </Link>
        <DesktopNav />
        <MobileNav />
      </header>
    </Container>
  );
};

export default SiteHeader;
