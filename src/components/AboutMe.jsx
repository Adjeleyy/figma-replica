import React from "react";
import Image from "next/image";
import udacity from "../images/aboutMe/udacity.png";
import upwork from "../images/aboutMe/upwork.svg";
import heart from "../images/aboutMe/heart.svg";

function AboutMe() {
  return (
    <div className="container absolute top-[1916px] left-[120px] w-[1110px] h-[597px]">
      <div className="relative">
        <h2 className="font-leagueSpartan font-bold text-[28px] w-[213px] h-[31px] leading-[100%] text-[#212126]">
          About 👨‍💼 Me
        </h2>
        <p className="font-hind absolute w-[699px] h-[96px] top-[101px] font-normal text-[20px] leading-[100%] text-[#212126]">
          I started as a frontend developer in college, and later I co-founded
          Aroliant Internet Private Limited with a friend. As a director and a
          developer, I learned a lot about managing a company, team, and
          projects.User Experience Nanodegree: The right way to design anything.
        </p>
        <p className="font-hind absolute w-[699px] h-[128px] top-[229px] font-normal text-[20px] leading-[100%] text-[#212126]">
          And in two years, I found my passion for design. In 2020 for personal
          reasons, I became a freelancer. Now, I’m selling digital goods on the
          web and working on freelance projects. I love helping small businesses
          to create their online presence and help setting up their own online
          store (e-commerce) to boost their business.
        </p>
        <p className="font-hind absolute w-[679px] h-[128px] top-[389px] font-normal text-[20px] leading-[100%] text-[#212126]">
          My design work ensures that it is developer-friendly as it passes
          through the lens of my experience as a frontend developer. When I
          design, I make sure it is 100% implementable by a frontend developer
          without any difficulties. I call it “Design for Code.”
        </p>
        <div className="absolute flex flex-row w-[494px] h-[32px] top-[565px] gap-[26px]">
          <Image src={heart} alt="heart" className="w-[23px] h-5" />
          <p
            className={
              "font-hind text-[20px] w-[445px] h-[32px] font-normal leading-[100%] text-[#212126]"
            }
          >
            I love <span className="text-[#FF6666]">good design</span>, gaming,
            art, netflix and gadgets.
          </p>
        </div>

        <div className="absolute flex flex-col w-[349px] h-[131px] top-[97px] left-[761px] gap-4">
          <Image className="w-[180px] h-[30px]" src={udacity} alt="udacity" />
          <div className="w-[349px] h-[51px] flex flex-col gap-1.5">
            <p className="font-leagueSpartan font-semibold text-[22px] w-[349px] h-[25px] leading-[100%] text-[#000000]">
              User Experience Nanodegree
            </p>
            <p className="w-[327px] h-5 text-[18px] font-leagueSpartan font-semibold text-[#6E6D7A] leading-[100%]">
              The right way to design anything.
            </p>
          </div>
          <a
            className="w-[138px] h-[18px] text-[#FF6666] text-[16px] font-leagueSpartan font-semibold leading-[100%]"
            href="#certificate"
          >
            View Certificate
          </a>
        </div>

        <div className="absolute flex flex-col w-[309px] h-[131px] top-[333px] left-[761px] gap-4">
          <Image className="w-[100.4px] h-[30px]" src={upwork} alt="upwork" />
          <div className="w-[309px] h-[51px] flex flex-col gap-1.5">
            <p className="font-leagueSpartan font-semibold text-[22px] w-[258px] h-[25px] leading-[100%] text-[#000000]">
              Available via Upwork
            </p>
            <p className="w-[327px] h-5 text-[18px] font-leagueSpartan font-semibold text-[#6E6D7A] leading-[100%]">
              Top level freelancer on Upwork
            </p>
          </div>
          <a
            className="w-[69px] h-[18px] text-[#FF6666] text-[16px] font-leagueSpartan font-semibold leading-[100%]"
            href="#Hire me"
          >
            Hire me
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
