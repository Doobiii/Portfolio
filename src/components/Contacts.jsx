import React from "react";
import {
    // FaFacebookSquare,
    FaGithubSquare,
    // FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import { SiCodeforces, SiCodechef } from "react-icons/si";

const Contacts = () => {
    return (
        <div
            name="contact"
            className="max-w-[1240px]  mx-auto py-16 px-4 grid grid-cols-2 gap-8 text-gray-300">
            <div>
                <h1 className="w-full my-5  text-3xl font-bold text-[#00df9a]">
                    Deepak
                </h1>
            </div>

            <div className="flex justify-between mx-10 md-w-[75%] my-7 md:my-6">
                <a
                    href="https://www.linkedin.com/in/deepak-singh-3a9b2a247/"
                    target="_blank"
                    rel="noreferrer">
                    <FaLinkedin className="text-2xl md:text-3xl" />
                </a>
                <a
                    href="https://github.com/Doobiii"
                    target="_blank"
                    rel="noreferrer">
                    <FaGithubSquare className="text-2xl md:text-3xl" />
                </a>
                <a
                    href="mailto:dkdn095@gmail.com"
                    target="_blank"
                    rel="noreferrer">
                    <AiFillMail className="text-2xl md:text-3xl" />
                </a>
                <a
                    href="https://codeforces.com/profile/95453578"
                    target="_blank"
                    rel="noreferrer">
                    <SiCodeforces className="text-2xl md:text-3xl" />
                </a>
                <a
                    href="https://www.codechef.com/users/doobii8092"
                    target="_blank"
                    rel="noreferrer">
                    <SiCodechef className="text-2xl md:text-3xl" />
                </a>
            </div>
        </div>
    );
};

export default Contacts;
