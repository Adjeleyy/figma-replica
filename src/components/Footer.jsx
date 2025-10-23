import Image from "next/image";
import navbar_icon from "../images/personalised_icons/navbar_icon.svg";

export default function Footer() {
  return (
    <footer className="w-[1440px] h-[160px] bg-[#F9F9F9] flex justify-center items-center mx-auto absolute top-[3389px] rounded">
      <div className="w-[1200px] h-[64px] flex flex-row">
        <div className="flex flex-row gap-8 w-fit h-[64px]">
          <Image width={50} height={50} src={navbar_icon} alt="Logo" />
          <div className="flex flex-col w-fit h-[64px]">
            <p className="text-[#6E6D7A] font-normal text-[20px] leading-[100%] h-[32px]">
              Narendra Ram
            </p>
            <p className="text-[#6E6D7A] font-normal text-[20px] leading-[100%] h-[32px]">
              Freelance Full Stack Designer
            </p>
          </div>
        </div>
        <div className="ml-auto flex flex-col gap-2">
          <p className="font-normal text-[20px] text-right text-[#6E6D7A] leading-[100%]">
            Designed using Figma
          </p>
          <p className="font-normal text-[20px] text-right text-[#6E6D7A] leading-[100%]">
            Hosted on <span className="underline">GitHub Pages</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
