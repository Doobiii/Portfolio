import React from "react";
import Typed from "react-typed";
import { MdWavingHand } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

function Hero() {
    return (
        <div name="home" className="text-white my-2">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] md:text-3xl font-bold flex justify-center p-2">
                    Hi There!{" "}
                    <MdWavingHand className="mx-2 my-1"></MdWavingHand>
                </p>
                <h1 className="md:text-7xl sm-text-6xl text-4xl fond-bold md:py-6">
                    I'm Deepak Kumar Singh
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        I am a
                    </p>
                    <Typed
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={["Developer", "Programmer"]}
                        typeSpeed={80}
                        backSpeed={80}
                        loop
                    />
                </div>
                {/* <p className="md:text-2xl text-xl font-bold text-gray-500">Can I do something for you?</p> */}
                <a
                    href="https://drive.google.com/file/d/1NYNUaiWBzxqaKY8IbYPB26lxqXt7V4V3/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto">
                    <button className="flex justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                        Resume
                        <BiLinkExternal className="mx-1 my-1"></BiLinkExternal>{" "}
                    </button>
                </a>
                {/* <div className='flex justify-center my-2 mt-6'>
              <img src="https://cp-logo.vercel.app/codeforces/dimpal_112" className='mx-1 h-4 md:h-8'/>
              <img src="https://img.shields.io/badge/codechef-1927-C40062" className='mx-1 h-4 md:h-8'/>
              <img src="https://cp-logo.vercel.app/atcoder/dk_sensei" className='mx-1 h-4 md:h-8'/>
            </div> */}
            </div>
        </div>
    );
}

export default Hero;
