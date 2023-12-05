import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import {SiLeetcode} from "react-icons/si";

const Footer = () => {
  return (
    <footer class="p-4 bg-skyblue rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 footer">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text">
        Developed by Hitarth Patel
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 footer-contact">
        <li>
          <a href="https://github.com/hitarth031099" class="mr-4 hover:underline md:mr-6 ">
            <BsGithub style={{color:'#87CEEB',width:"200%",height:"auto"}}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/-hitarthpatel/" class="mr-4 hover:underline md:mr-6">
            <BsLinkedin style={{color:'#87CEEB',width:"200%",height:"auto"}}/>
          </a>
        </li>
                    </ul>
    </footer>
  );
};

export default Footer;
