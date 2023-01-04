import React from "react";
import aboutmeBg from "../../../Assets/BackgoundImage/aboutmeBg.png";
import golamRasul from "../../../Assets/image/golam-rasul.jpg";

const AboutMe = () => {
  return (
    <div
      style={{
        background: `url(${aboutmeBg})`,
        backgroundSize: "content",
      }}
    >
      <div class="hero  ">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar">
            <div class="w-72 mask mask-squircle">
              <img src={golamRasul} alt="" />
            </div>
          </div>
          <div className="ml-14">
            <h1 className=" lg:text-5xl text-2xl lg:text-left text-center font-bold  ">
              About Me..
            </h1>
            <h3 className="text-xl font-bold  lg:text-left text-center">
              Shortly Describe{" "}
            </h3>

            <p class="py-6 lg:first-letter:text-6xl first-letter:text-4xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
              As a sucker, I enjoy exploring and enforcing new effects. Web
              Development is the stylish path to discover and develop in new
              ways.I am a FrontEnd base Backend inventor as well as I've good
              experience erecting a web runner using WordPress.
            </p>
            <div>
              <div className="">
                <div
                  className=" mx-auto grid grid-cols-1 lg:grid-cols-3  bg-blue-200 px-12 rounded-xl "
                >
                  <div className="mx-auto ">
                    <img className="mx-auto  w-12 my-4" src={golamRasul} alt="" />
                    <h2 className="font-bold text-l text-center">1.2+ Years</h2>
                    <h4 className="text-center">FrontEnd Development</h4>
                  </div>
                  <div className="mx-auto ">
                    <img className="mx-auto w-12 my-4" src={golamRasul} alt="" />
                    <h2 className="font-bold text-l text-center">8+ months</h2>
                    <h4 className="text-center">BackEnd Development</h4>
                  </div>
                  <div className="mx-auto ">
                    <img className="mx-auto  w-12 my-4" src={golamRasul} alt="" />
                    <h2 className="font-bold text-l text-center">1.5+ Years</h2>
                    <h4 className="text-center">WordPress Development</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
