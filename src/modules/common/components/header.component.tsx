"use client";

import { useState } from "react";
import { DumbbellIcon, HamburgerMenuIcon } from "@/modules/common/icons";
import { sairaCondensed } from "@/app/fonts";
import Image from "next/image";
import { MobileNavMenu, DesktopNavMenu } from ".";
import { NavLink } from "@/modules/interfaces";

const links: NavLink[] = [
  { label: "Home", url: "#", type: "link" },
  { label: "About", url: "#", type: "link" },
  { label: "Locations", url: "#", type: "link" },
  { label: "Contact", url: "#", type: "link" },
  { label: "Sign Up", url: "#", type: "button" },
];

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="bg-black pt-5 h-[400px] md:h-[500px] lg:h-[600px] relative box-border px-[20px] lg:px-0">
      <Image
        className="absolute top-0 right-0 z-0 w-[100%] h-[400px] lg:w-[960px] md:h-[500px] lg:h-[600px] object-cover object-top-center md:object-right-top"
        src="/images/making-dumbbell.jpg" alt="Dumbbell Fitness"
        width={960}
        height={600}
        priority
      />

      {/* Gradient Filter (only tablet and desktop) */}
      <div className="absolute top-0 left-0 z-10 hidden md:block w-full md:h-[500px] lg:h-[600px] bg-gradient-to-r from-black to-transparent" />

      {/* Black Filter (only mobile) */}
      <div className="absolute top-0 left-0 z-10 block md:hidden w-full h-[400px] bg-black/40" />

      <section className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto relative z-[20] pt-5 flex justify-between items-center">
        <section className="flex justify-start items-center gap-x-2">
          <DumbbellIcon className="text-primary" size={50} />
          <span className={`${sairaCondensed.className} uppercase font-black text-3xl text-white`}>
            WorldFitness
          </span>
        </section>

        <DesktopNavMenu links={links} />

        <button
          type="button"
          className="block md:hidden"
          onClick={() => setMenuActive(true)}
        >
          <HamburgerMenuIcon
            className="text-white active:text-primary"
            width={35}
            height={35}
          />
        </button>
      </section>

      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto relative z-20 text-white h-[310px] lg:h-[510px] flex justify-center lg:justify-start items-end lg:items-center">
        <p className={`${sairaCondensed} uppercase text-4xl lg:text-6xl font-extrabold pb-10 lg:pb-0`}>
          Make your<br />
          workout <span className="text-primary">efficient</span>
        </p>
      </div>

      <div className="absolute z-[100] bottom-0 left-0 hidden md:block w-full md:h-[40px] lg:h-[80px] overflow-hidden">
        <div className="w-full h-full bg-light [clip-path:polygon(100%_0,_100%_100%,_0_100%)]"></div>
      </div>

      <MobileNavMenu
        isMenuActive={menuActive}
        setMenuActive={setMenuActive}
        links={links}
      />

    </header>
  );
};
