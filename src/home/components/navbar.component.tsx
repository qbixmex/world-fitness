import { DumbbellIcon } from "@/app/components/icons";
import { sairaCondensed } from "@/app/fonts";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="bg-black pt-5 h-[600px] relative box-border px-[20px] lg:px-0">
      <Image
        className="absolute top-0 right-0 z-0 w-[960px] h-[600px] object-cover object-top-center md:object-right-top"
        src="/images/making-dumbbell.jpg" alt="Dumbbell Fitness"
        width={960}
        height={600}
        priority
      />
      <div className="absolute top-0 left-0 z-10 hidden md:block w-full h-[600px] bg-gradient-to-r from-black to-transparent" />
      <div className="absolute top-0 left-0 z-10 block md:hidden w-full h-[600px] bg-black/40" />
      <section className="container mx-auto relative z-[20] pt-5 flex justify-between items-center">
        <section className="flex justify-start items-center gap-x-2">
          <DumbbellIcon
            className="text-primary"
            width={50}
            height={50}
          />
          <span className={`${sairaCondensed.className} uppercase font-black text-3xl text-white`}>
            WorldFitness
          </span>
        </section>
        <nav className={`${sairaCondensed.className} hidden lg:flex items-center gap-x-2 uppercase font-bold text-white text-2xl`}>
          <a className="hover:text-primary-light transition-colors" href="#">Home</a>
          <a className="hover:text-primary-light transition-colors" href="#">About</a>
          <a className="hover:text-primary-light transition-colors" href="#">Locations</a>
          <a className="hover:text-primary-light transition-colors" href="#">Contact</a>
          <a className="bg-primary hover:bg-primary-dark hover:text-gray-200 transition-colors px-5 py-2 rounded-xl ml-2" href="#">Sign Up</a>
        </nav>
      </section>
      <div className="container mx-auto relative z-20 text-white h-[510px] flex justify-start items-center">
        <p className={`${sairaCondensed} uppercase text-6xl font-extrabold`}>
          Make your<br />
          workout <span className="text-primary">efficient</span>
        </p>
      </div>
      <div className="absolute z-[100] bottom-0 left-0 hidden md:block w-full h-[80px] overflow-hidden">
        <div className="w-full h-full bg-light [clip-path:polygon(100%_0,_100%_100%,_0_100%)]"></div>
      </div>
    </header>
  );
};
