import React from "react";
import { Button } from "../button";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const SocialNav = ({ ...props }) => {
  return (
    <div {...props}>
      <ul className="flex flex-col gap-4">
        <li>
          <Button asChild rounded={"full"} size={"icon"}>
            <Link href="https://github.com/martekn">
              <GitHubLogoIcon />
              <span className="sr-only">Github profile</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild rounded={"full"} size={"icon"}>
            <Link href="https://www.linkedin.com/in/martekn/">
              <LinkedInLogoIcon />
              <span className="sr-only">Linkedin account</span>
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SocialNav;
