import React from "react";

//images
import Ecell from "../assets/nss.png";
import Portfolio from "../assets/Portfoliotest.png";
import ToDo from "../assets/airapidAPI.png";
import Reactlogo from "../assets/React-logo.webp";
import Cpplogo from "../assets/Cpplogo.png";
import Gitlogo from "../assets/Gitlogo.png";
import Tailwindlogo from "../assets/Tailwindlogo.png";
import MongoLogo from "../assets/MongoLogo.png";

import SkillCard from "./SkillCard";

// icons
import { AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
// import { data } from 'autoprefixer';

const SkillData = [
    {
        key: 1,
        name: "React",
        logo: Reactlogo,
        alt: "React logo",
        data: "Know basic C/C++ programming. Used for contest programming and problem solving.",
    },
    {
        key: 2,
        name: "C++",
        logo: Cpplogo,
        alt: "C++ logo",
        data: "Know basic C/C++ programming. Used for contest programming and problem solving.",
    },
    {
        key: 3,
        name: "Git",
        logo: Gitlogo,
        alt: "Git logo",
        data: "Experienced with git-based development. Mostly, use Github,Git, Gitlab for version control.",
    },
    {
        key: 4,
        name: "Tailwind",
        logo: Tailwindlogo,
        alt: "Tailwind logo",
        data: "Used Tailwind CSS for styling my projects. Know the basics of Tailwind.",
    },
    {
        key: 5,
        name: "Mongo DB",
        logo: MongoLogo,
        alt: "Mongo DB logo",
        data: "Used Mongo DB for storing data in my projects. Know the basics of Mongo DB.",
    },
];

function Projects() {
    return (
        // I have to fix this
        <div name="projects" className="w-full p-2 px-4 bg-white">
            <h1 className="text-3xl mb-2 py-[2em] font-bold text-[#174033] text-center">
                Projects I've recently worked in
            </h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                {/* Card-1 */}
                <div className="w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-60 mx-auto mt-[-3rem] bg-white"
                        src={Ecell}
                        alt="/project logo"
                    />
                    <div className="my-2 font-serif">
                        <p className="font-bold">NSS Webpage</p>
                        <div className="flex flex-row">
                            <p className="font-bold">Techstack Used: </p>
                            <p>EJS, React, Tailwind</p>
                        </div>
                        <div>
                            <p>
                                Built the official NSS NIT Silchar website with
                                a team, using React.js for a dynamic and
                                responsive UI.
                                <br />
                                Focused on optimizing performance, improving
                                code structure, and enhancing user experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <a
                            href="https://github.com/Doobiii/project_nss"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto">
                            <button className="flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
                                <AiOutlineGithub className="my-1 mx-1"></AiOutlineGithub>{" "}
                                Github
                            </button>
                        </a>

                        <a
                            href="https://project-nss.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto">
                            <button className="flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
                                <CgWebsite className="my-1 mx-1"></CgWebsite>{" "}
                                Demo
                            </button>
                        </a>
                    </div>
                </div>

                {/* card-2 */}
                <div className="w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-60 mx-auto mt-[-3rem] bg-white"
                        src={Portfolio}
                        alt="/project logo"
                    />
                    <div className="my-2 font-serif">
                        <p className="font-bold">Personal Portfolio </p>
                        <div className="flex flex-row">
                            <p className="font-bold">Techstack Used: </p>
                            <p>React JS, Tailwind css </p>
                        </div>
                        <p>
                            Created a responsive personal portfolio website
                            using React JS and Tailwind CSS to get used to
                            different library's and hooks used in React JS and
                            the classes used in tailwind CSS
                        </p>
                    </div>

                    <div className="flex pt-[4.5rem]">
                        <a
                            href="https://portfolio-phi-three-58.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto">
                            <button className="flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
                                <AiOutlineGithub className="my-1 mx-1"></AiOutlineGithub>{" "}
                                Github
                            </button>
                        </a>

                        <a
                            href="https://github.com/Doobiii/Portfolio"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto">
                            <button className="flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
                                <CgWebsite className="my-1 mx-1"></CgWebsite>{" "}
                                Demo
                            </button>
                        </a>
                    </div>
                </div>

                {/* card-3 */}
                <div className="w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-60 mx-auto mt-[-3rem] bg-white"
                        src={ToDo}
                        alt="/project logo"
                    />
                    <div className="my-2 font-serif">
                        <p className="font-bold">AI Summarizer</p>
                        <div className="flex flex-row">
                            <p className="font-bold">Techstack Used: </p>
                            <p>React, Tailwind, RapidAPI</p>
                        </div>
                        <p>
                            Created an AI-powered text summarization tool using
                            React.js and Tailwind CSS to enhance my
                            understanding of state management, API integration,
                            and responsive design while working with modern web
                            technologies.
                        </p>
                    </div>

                    <div className="flex pt-[4.5rem]">
                        <a
                            href="https://github.com/Doobiii/ai-summarizer"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto">
                            <button className="flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
                                <AiOutlineGithub className="my-1 mx-1"></AiOutlineGithub>{" "}
                                Github
                            </button>
                        </a>
                        <a
                            href="https://ai-summarizer-theta-ruby.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto">
                            <button className="flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
                                <CgWebsite className="my-1 mx-1"></CgWebsite>{" "}
                                Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Skill */}
            <h1 className="text-3xl mb- py-[2em] font-bold text-[#174033] text-center">
                Skills
            </h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 font-serif">
                {SkillData.map((skill) => (
                    <div key={skill.key}>
                        <SkillCard skill={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
