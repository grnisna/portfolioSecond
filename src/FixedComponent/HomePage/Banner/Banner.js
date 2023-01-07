import React from "react";
import bgImage from "../../../Assets/BannerBG/grnisanbg.jpg";
import fontImage from "../../../Assets/BannerBG/grNisan.png";
import SocialMedia from "../../../SharedComponent/SocialMedia/SocialMedia";
import ExperienceSummary from "../ExperienceSummary/ExperienceSummary";

const Banner = () => {
  return (
    <div
      className="lg:px-12 px-6 py-5 "
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={fontImage} className="lg:max-w-lg" alt="imag" />
          <div>
            <h3 className="text-white">Hi,</h3>
            <h1 className="lg:text-5xl text-3xl font-bold text-white">
              This is GR NISAN
            </h1>
            <h2 className="text-white text-xl">Front-End Developer</h2>
            <p className="py-6 text-white text-justify">
              I'm glad to having you on my portfolio.As a developer create a
              things complicated is my hobby.I would like to introduce my
              thinkings, knowledged and skills sets with you throw this
              portfolio.You can also know about me more by downloading my
              resume.
            </p>

            <div class="">
              <button className="bg-blue-100 hover:bg-blue-400 flex justify-center items-center px-4 py-2 rounded-md text-white-200 gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"></path>
                  <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path>
                </svg>
                <a className="text-sm lg:text-xl" href="https://drive.google.com/uc?export=download&id=1CN935nxs2mByw5AX6eXB6iwLyWXUOzml">
                  DOWNLOAD RESUME
                </a>
              </button>
              <SocialMedia />
            </div>
          </div>
        </div>
        <ExperienceSummary/>
      </div>
    </div>
  );
};

export default Banner;
