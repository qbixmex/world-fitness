"use client";

import { FC } from "react";
import { sairaCondensed } from "@/app/fonts";
import { NavLink } from "@/modules/interfaces";
import Link from "next/link";

type Props = {
  links: NavLink[];
};

const linkStyles = "hover:text-primary-light transition-colors";
const signUpStyles = "bg-primary hover:bg-primary-dark hover:text-gray-200 transition-colors px-5 py-2 rounded-xl ml-2";

export const DesktopNavMenu: FC<Props> = (props) => {
  return (
    <nav className={`${sairaCondensed.className} hidden md:flex items-center gap-x-4 uppercase font-bold text-white md:text-xl lg:text-2xl`}>
      {props.links.map((link) => {
        let styles: string;
        switch (link.type) {
          case "button":
            styles = signUpStyles;
            break;
          case "link":
            styles = linkStyles;
            break;
          default:
            styles = "";
        }
        return (
          <Link
            key={link.label}
            className={styles}
            href={link.url}
          >{link.label}</Link>
        );
      })}
    </nav>
  );
};
