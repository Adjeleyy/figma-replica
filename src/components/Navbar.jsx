import navbar from "../images/personalised_icons/navbar_icon.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-[1200.48px] h-[86px] mx-auto">
      <div className="flex flex-row justify-between gap-[667px]">
        <div className=" pt-[13px] pb-[13px]  mx-auto">
          <Image className="w-[60.48px] h-[60px]" src={navbar} alt="Logo" />
        </div>
        <div className="h-[22px] my-auto w-[473px]">
          <ol className="list-decimal list-inside leading-[100%] text-[20px] font-leagueSpartan marker:text-[#FF6666] marker:text-[20px] marker:font-leagueSpartan marker:font-semibold flex flex-row gap-[24px] h-[22px]">
            <li className="w-[110px] h-[22px]">
              <a
                className="font-semibold leading-[100%]  text-[#336699]"
                href="#hero"
              >
                Services
              </a>
            </li>
            <li className="w-[85px] h-[22px]">
              <a
                className="font-semibold leading-[100%] text-[#336699]"
                href="#about"
              >
                Work
              </a>
            </li>
            <li className="w-[94px] h-[22px]">
              <a
                className="font-semibold leading-[100%] text-[#336699]"
                href="#work"
              >
                About
              </a>
            </li>
            <li className="w-[112px] h-[22px]">
              <a
                className="font-semibold leading-[100%] text-[#336699]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
}
