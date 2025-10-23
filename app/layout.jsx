import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { League_Spartan } from "next/font/google";
import { Hind } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
});

export const metadata = {
  title: "Narenda - Freelance Full Stack Designer",
  description: "Portfolio of Narenda, a freelance full stack designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative w-[1440px] h-[3549px] rounded-[20px] mx-auto ${leagueSpartan.variable} ${hind.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
