import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  html_logo,
  css_logo,
  git_logo,
  github_logo,
  js_logo,
  npm_logo,
  redux_logo,
  react_logo,
  tailwind_logo,
  vite_logo,
  vscode_logo,
} from "../../assets/images";

const logos = [
  {
    url: html_logo,
    title: "HTML",
  },
  {
    url: css_logo,
    title: "CSS",
  },
  {
    url: js_logo,
    title: "JavaScript",
  },
  {
    url: tailwind_logo,
    title: "Tailwind CSS",
  },
  {
    url: react_logo,
    title: "React JS",
  },
  {
    url: redux_logo,
    title: "Redux",
  },
  {
    url: vite_logo,
    title: "Vite",
  },
  {
    url: npm_logo,
    title: "npm",
  },
  {
    url: git_logo,
    title: "Git",
  },
  {
    url: github_logo,
    title: "Github",
  },
  {
    url: vscode_logo,
    title: "VS Code",
  },
];

const Skills = () => {

  AOS.init({ offset: 300, duration: 600 });

  return (
    <div data-aos="zoom-in" className="min-h-screen px-5 md:px-36 py-10 flex flex-col justify-center gap-10">
      <div className="w-full flex flex-col justify-center items-center gap-5 py-10">
        <h1 className="text-[black] font-semibold text-2xl sm:text-3xl">
          {"{"} <span className="text-[#ff4800]">My Skills</span> {"}"}
        </h1>
        <h1 className="text-black font-semibold text-xl sm:text-2xl">
          {"{"} <span className="text-[#ff4800]">Languages & Tools</span> {"}"}
        </h1>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-5 sm:gap-10">
        {logos.map((logo, id) => (
          <div
            className="w-[80px] h-[80px] flex justify-center items-center rounded-md bg-white  hover:scale-110 transition cursor-pointer hover:drop-shadow-2xl drop-shadow-md"
            key={id}
          >
            <div className="w-[50px] flex items-center">
              <img
                src={logo.url}
                alt="logo.title"
                title={logo.title}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
