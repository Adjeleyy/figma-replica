import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import frontendDevelopment from "../images/personalised_icons/frontend_development.svg";
import mobileWebDesign from "../images/personalised_icons/mobdesign.svg";
import graphicDesign from "../images/personalised_icons/graphic_design.svg";

function Experience() {
  return (
    <div className="absolute w-[1200px] h-[478px] top-[695px] flex flex-col left-[120px] gap-[84px]">
      <h2 className="font-leagueSpartan font-bold text-[28px] leading-[100%] w-[151px] h-[31px] text-[#212126]">
        What I do
      </h2>
      <div className="flex flex-row w-[1200px] h-[363px] gap-[30px]">
        <div className="w-[380px] h-[363px] flex flex-col gap-[32px]">
          <Image src={mobileWebDesign} alt="Mobile & Web Design" />

          <h4 className="font-leagueSpartan w-[278px] h-[27px] font-semibold text-[24px] leading-[100%] text-[#212126]">
            Mobile & Web Design
          </h4>
          <p className="font-hind font-normal w-[380px] h-[160px] text-[#6E6D7A] text-[20px] leading-[100%]">
            Need a website or mobile app? I can create beautiful websites or
            mobile apps based on your content, or redesign your old website to
            improve user engagement or achieve your business goals."
          </p>
          <span className="font-leagueSpartan w-[189px] h-[25px] font-semibold text-[22px] leading-[100%] text-[#212126]">
            Get an estimate
          </span>
        </div>
        <div className="w-[380px] h-[363px] flex flex-col gap-[32px]">
          <Image src={graphicDesign} alt="Graphic Design" />
          <h4 className="w-[278px] h-[27px] font-leagueSpartan font-semibold text-[24px] leading-[100%] text-[#212126]">
            Graphic Design
          </h4>
          <p className="font-hind font-normal w-[380px] h-[160px] text-[#6E6D7A] text-[20px] leading-[100%]">
            Need art for your project? I can create beautiful art, designs based
            on your project requirements such as business cards, digital
            banners, icons, logos, hand-drawn characters, abstracts, textures,
            etc.
          </p>
          <span className="font-leagueSpartan w-[189px] h-[25px] font-semibold text-[22px] leading-[100%] text-[#212126]">
            Get an estimate
          </span>
        </div>
        <div className="w-[380px] h-[363px] flex flex-col gap-[32px]">
          <Image src={frontendDevelopment} alt="Frontend Development" />
          <h4 className="w-[298px] h-[27px] font-leagueSpartan font-semibold text-[24px] leading-[100%] text-[#212126]">
            Frontend Development
          </h4>

          <p className="w-[380px] h-[160px] font-hind font-normal text-[#6E6D7A] text-[20px] leading-[100%]">
            Already have the design? I can create static websites such as
            landing pages, company sites, and custom websites with minimal
            javascript. Will deliver a well-documented code.
          </p>
          <span className="w-[189px] h-[25px] font-leagueSpartan font-semibold text-[22px] leading-[100%] text-[#212126]">
            Get an estimate
          </span>
        </div>
      </div>
    </div>
  );
}
export default Experience;
