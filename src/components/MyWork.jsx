import Image from "next/image";
import adobeStock from "../images/icons/adobeStock.svg";
import antmajeur from "../images/icons/antmajeur.svg";
import behance from "../images/icons/behance.svg";
import cgsociety from "../images/icons/cgsociety.svg";
import deviantart from "../images/icons/deviantart.svg";
import dribble from "../images/icons/dribble.svg";
import freepik from "../images/icons/freepik.svg";
import sketchfab from "../images/icons/sketchfab.svg";
import spreadshirt from "../images/icons/spreadshirt.svg";
import artstation from "../images/icons/artstation.svg";

export default function MyWork() {
  return (
    <div className="container absolute top-[1353px] left-[120px] mx-auto w-[1200px] h-[383px]">
    <div className="relative">
      <h2 className="w-[401px] h-[31px] font-leagueSpartan font-bold text-[28px] leading-[100%] text-[#212126]">
        Where to find 🔍 my work?
      </h2>

      <Image
        className="absolute w-[178.9px] h-[60px] top-[95px]"
        src={dribble}
        alt="dribble"
      />
      <Image
        className="absolute w-[238.51px] h-[60px] top-[95px] left-[259px]"
        src={deviantart}
        alt="deviantart"
      />
      <Image
        className="absolute w-[241px] h-[60px] top-[95px] left-[578px]"
        src={artstation}
        alt="artstation"
      />
      <Image
        className="absolute w-[289.9px] h-[60px] top-[95px] left-[910px]"
        src={sketchfab}
        alt="sketchfab"
      />
      <Image
        className="absolute w-[226.23px] h-[60px] top-[205px]"
        src={cgsociety}
        alt="cgsociety"
      />
      <Image
        className="absolute w-[153.53px] h-[60px] top-[205px] left-[301px] rounded-[10px]"
        src={behance}
        alt="behance"
      />
      <Image
        className="absolute w-[259.14px] h-[60px] top-[205px] left-[529px]"
        src={antmajeur}
        alt="antmajeur"
      />
      <Image
        className="absolute w-[376.69px] h-[60px] top-[205px] left-[823px]"
        src={spreadshirt}
        alt="spreadshirt"
      />
      <Image
        className="absolute w-[280.56px] h-[60px] top-[317px]"
        src={adobeStock}
        alt="adobeStock"
      />
      <Image
        className="absolute w-[221.01px] h-[60px] top-[317px] left-[337px]"
        src={freepik}
        alt="freepik"
      />
      </div>
      </div>
  );
}
