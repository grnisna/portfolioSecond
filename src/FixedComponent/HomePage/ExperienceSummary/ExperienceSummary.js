import React from "react";
import wordpress from "../../../Assets/Icons/wordpress1.png";
import backend from "../../../Assets/Icons/backend.png";
import fontend from "../../../Assets/Icons/frontend.png";
import backgroundShadow from "../../../Assets/BackgoundImage/backgroundShadow.png";


const ExperienceSummary = () => {
  return (
    <div className="bg-blue-200 lg:max-w-[800px] rounded-xl mx-auto lg:mt-20">
      <div
        style={{
          background: `url(${backgroundShadow})`,
          backgroundSize: "cover",
        }}
        className=" mx-auto grid grid-cols-1 lg:grid-cols-3  bg-blue-200 px-12 rounded-xl py-8"
      >
        <div className="mx-auto ">
          <img className="mx-auto my-4" src={fontend} alt="" />
          <h2 className="font-bold text-l text-center">1.2+ Years</h2>
          <h4 className="text-center">FrontEnd Development</h4>
        </div>
        <div className="mx-auto ">
          <img className="mx-auto my-4" src={backend} alt="" />
          <h2 className="font-bold text-l text-center">8+ months</h2>
          <h4 className="text-center">BackEnd Development</h4>
        </div>
        <div className="mx-auto ">
          <img className="mx-auto my-4" src={wordpress} alt="" />
          <h2 className="font-bold text-l text-center">1.5+ Years</h2>
          <h4 className="text-center">WordPress Development</h4>
        </div>
        
      </div>
    </div>
  );
};

export default ExperienceSummary;
