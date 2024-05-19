"use client";

import { FC } from "react";
import { TimesIcon } from "@/app/components/icons";
import { sairaCondensed } from "@/app/fonts";

type Props = {
  isMenuActive: boolean;
  setMenuActive: (active: boolean) => void;
};

export const MobileNavMenu: FC<Props> = ({ isMenuActive, setMenuActive }) => {

  if (!isMenuActive) return null;

  return (
    <section className="absolute top-0 left-0 bg-gray-50 z-[1000] w-full lg:hidden">
      <button
        type="button"
        className="absolute top-[10px] right-[10px] text-stone-800 active:text-primary"
        onClick={() => setMenuActive(false)}
      >
        <TimesIcon width={40} height={40} />
      </button>
      <nav className={`${sairaCondensed.className} flex flex-col items-center justify-center gap-y-2 py-10 uppercase font-semibold text-stone-800 text-2xl`}>
        <a className="active:text-primary-light" href="#">Home</a>
        <a className="active:text-primary-light" href="#">About</a>
        <a className="active:text-primary-light" href="#">Locations</a>
        <a className="active:text-primary-light" href="#">Contact</a>
        <a className="block bg-primary active:bg-primary-dark text-white active:text-gray-200 px-5 py-2 rounded-xl mt-2" href="#">Sign Up</a>
      </nav>
    </section>
  );

};
