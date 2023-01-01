import React from "react";
import facebook from "../../Assets/Icons/facebook.png";
import linkedin from "../../Assets/Icons/linkedin.png";
import github from "../../Assets/Icons/github.png";
// import dribbble from "../../Assets/Icons/dribbble.png";
// import twitter from "../../Assets/Icons/twitter.png";
// import whatsapp from "../../Assets/Icons/whatsapp.png";

const SocialMedia = () => {
  return (
    <div>
      <div class="avatar mt-5">
        <div class="w-12 mask mask-hexagon hover:bg-blue-400 bg-blue-200 ml-4">
          <a  href="https://www.linkedin.com/in/grnisan/">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
      <div class="avatar">
        <div class="w-12 mask mask-hexagon hover:bg-blue-400 bg-blue-200 mx-4">
          <a href="https://www.linkedin.com/in/grnisan/">
            <img src={github} alt="gitgub" />
          </a>
        </div>
      </div>
      <div class="avatar">
        <div class="w-12 mask mask-hexagon hover:bg-blue-400 bg-blue-200">
          <a href="https://www.linkedin.com/in/grnisan/">
            <img src={linkedin} alt="lindedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
