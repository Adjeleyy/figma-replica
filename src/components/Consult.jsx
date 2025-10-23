import Image from "next/image";
import linkedin from "../images/socials/linkedin.svg";
import twitter from "../images/socials/twitter.svg";
import narenda from "../images/socials/narenda.svg";

export default function Consult() {
  return (
    <div className="container mx-auto absolute top-[2693px] left-[120px] w-[1200px] h-[516px]">
      <div className="relative flex flex-row gap-2.5">
        <h2
          className="w-[329px] h-[31px] font-leagueSpartan font-bold text-[28px] leading-[100%]"
        >
          📅 Schedule a consult.
        </h2>
        <p
          className="absolute font-hind font-normal text-[20px] leading-[100%] w-[350px] h-[96px] top-[63px] text-[#212126]"
        >
          I am always open to discuss your project, improve your online presence
          or help with your UX/UI design challenges.
        </p>
        <p className="absolute top-[207px] w-[138px] h-[20px] font-leagueSpartan font-semibold text-[18px] text-[#6E6D7A] leading-[100%]">
          📧 Email me at
        </p>
        <p className="absolute top-[243px] w-[350px] h-[32px] font-hind font-medium text-[20px] text-[#212126] leading-[100%]">
          hi@narendra.design
        </p>

        <p className="absolute top-[323px] w-[65px] h-[20px] font-leagueSpartan font-semibold text-[18px] text-[#6E6D7A] leading-[100%]">
          Follow
        </p>
        <div className="absolute flex flex-row w-[146px] h-[38px] gap-4 top-[359px]">
          <Image src={linkedin} alt="LinkedIn" className="size-[38px]" />
          <Image src={twitter} alt="Twitter" className="size-[38px]" />
          <Image src={narenda} alt="Narenda" className="size-[38px]" />
        </div>

        <input
          className="absolute w-[580px] h-[56px] left-[620px] rounded-[4px] border-[1px] px-5 py-3 border-solid border-[#DEDEDE] placeholder:text-[#6E6D7A] placeholder:text-[20px] placeholder:font-[400] placeholder:font-hind"
          type="text"
          placeholder="Your name*"
        />
        <input
          className="absolute w-[580px] h-[56px] left-[620px] top-[88px] rounded-[4px] border-[1px] px-5 py-3 border-solid border-[#DEDEDE] placeholder:text-[#6E6D7A] placeholder:text-[20px] placeholder:font-[400] placeholder:font-hind"
          type="text"
          placeholder="Your email*"
        />
        <input
          className="absolute w-[580px] h-[56px] left-[620px] top-[176px] rounded-[4px] border-[1px] px-5 py-3 border-solid border-[#DEDEDE] placeholder:text-[#6E6D7A] placeholder:text-[20px] placeholder:font-[400] placeholder:font-hind"
          type="text"
          placeholder="Your website (if exists)"
        />
        <input
          className="absolute w-[580px] h-[140px] left-[620px] top-[264px] rounded-[4px] border-[1px] py-3 px-5 border-solid flex items-start justify-start border-[#DEDEDE] placeholder:text-[#6E6D7A] placeholder:text-[20px] placeholder:font-[400] placeholder:font-hind"
          type="text"
          placeholder="How can I help?*"
        />
        <button className="absolute font-leagueSpartan w-[171px] h-[48px] top-[468px] left-[1029px] rounded bg-[#FF6666] text-[#000000] font-semibold text-[20px] p-[19px] leading-[100%]">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
