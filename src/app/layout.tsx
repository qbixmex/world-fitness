import type { Metadata } from "next";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym App",
  description: "A gym app built with Next.js and Tailwind CSS",
  robots: "index, follow",
};

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = (props) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light`}>
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
