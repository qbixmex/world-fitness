import { sairaCondensed, openSans } from "@/app/fonts";
import { EnvelopeIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "../icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <section className="container text-white grid md:grid-cols-2 h-full">
        <section className="col-span-1 md:flex md:flex-col md:justify-between">
          {/* Title */}
          <section className={`${sairaCondensed.className} text-6xl font-black text-center uppercase mb-5`}>
            <p>Ready for YOUR<br />free <span className="text-primary">Lesson</span> ?</p>
          </section>
          {/* Email */}
          <section className="lg:hover:text-primary lg:transition-colors">
            <Link href="#">
              <div className="flex gap-x-4 items-center justify-center">
                <EnvelopeIcon />
                <p className={`${openSans} text-xl font-semibold`}>info@domain.com</p>
              </div>
            </Link>
          </section>
        </section>

        <section className="col-span-1 md:flex md:flex-col md:justify-between">
          {/* Social Media */}
          <section className="flex justify-center items-center gap-5 my-10 lg:justify-end md:my-0 md:mt-2 md:mb-10">
            <Link href="#" className="active:text-primary lg:hover:text-primary lg:transition-colors">
              <FacebookIcon />
            </Link>
            <Link href="#" className="active:text-primary lg:hover:text-primary lg:transition-colors">
              <TwitterIcon />
            </Link>
            <Link href="#" className="active:text-primary lg:hover:text-primary lg:transition-colors">
              <InstagramIcon />
            </Link>
          </section>
          {/* Links */}
          <section className={`${openSans} flex flex-col items-center lg:flex-row lg:justify-end gap-4 font-semibold text-xl mt-3`}>
            <Link href="#" className="active:text-primary lg:hover:text-primary lg:transition-colors">Terms and conditions</Link>
            <Link href="#" className="active:text-primary lg:hover:text-primary lg:transition-colors">Privacy Policy</Link>
          </section>
        </section>
      </section>
    </footer>
  );
};
