"use client";

import { FC } from "react";
import { TimesIcon } from "@/app/components/icons";
import { sairaCondensed } from "@/app/fonts";
import { NavLink } from "@/modules/interfaces";
import Link from "next/link";

type Props = {
  isMenuActive: boolean;
  links: NavLink[];
  setMenuActive: (active: boolean) => void;
};

const linkStyles = "active:text-primary-light";
const signUpStyles = "block bg-primary active:bg-primary-dark text-white active:text-gray-200 px-5 py-2 rounded-xl mt-2";

export const MobileNavMenu: FC<Props> = ({ isMenuActive, links, setMenuActive }) => {

  if (!isMenuActive) return null;

  return (
    <section className="absolute top-0 left-0 bg-gray-50 z-[1000] w-full h-screen lg:hidden">
      <button
        type="button"
        className="absolute top-[10px] right-[10px] text-stone-800 active:text-primary"
        onClick={() => setMenuActive(false)}
      >
        <TimesIcon width={40} height={40} />
      </button>

      <nav className={`${sairaCondensed.className} flex flex-col items-center justify-center gap-y-4 py-10 uppercase font-semibold text-stone-800 text-3xl h-full`}>
        {links.map((link) => {
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
          )
        }
      )}
      </nav>
    </section>
  );

};
