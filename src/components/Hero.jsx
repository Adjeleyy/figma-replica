import Image from "next/image";
import hero from "../images/personalised_icons/hero.svg";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <div className=" absolute left-[306px] top-[261px] flex flex-row w-[829px] h-[254px] gap-[100px] ">
      <div>
        <Image className="w-[254px] h-[254px]" src={hero} alt="hero" />
      </div>
      <div className="relative">
        <h3 className="font-leagueSpartan text-[26px] leading-9 w-[271px] h-[36px] font-semibold text-[#212126]">
          Hi &#128075;, I'm Narendra
        </h3>
        <div className="absolute w-[475px] h-[86px] top-[62px] ">
          <h1 className="font-leagueSpartan font-semibold text-[30px] leading-[54px] text-[#212126]">
            Freelance Full Stack Designer
          </h1>
          <p
            className={
              "font-thin text-[20px] leading-[100%] font-hind text-[#6E6D7A] w-[394px]"
            }
          >
            "good design makes the world a better place."
          </p>
        </div>
        <div className="flex flex-row gap-[30px] w-[300px] h-[48px] top-[206px] absolute">
          <button className="font-leagueSpartan w-[134px] h-[48px] leading-[100%] p-[19px] rounded text-[20px] flex justify-center items-center font-semibold bg-[#336699] text-white">
            My Work
          </button>
          <button className="font-leagueSpartan w-[136px] h-[48px] leading-[100%] p-[19px] rounded text-[20px] flex justify-center items-center font-semibold bg-[#FF6666] text-black">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
}
