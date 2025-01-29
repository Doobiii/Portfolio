import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handlenav = () => {
        setNav(!nav);
    };

    // useEffect(()=>{
    // },[window])

    // console.log(window.innerWidth);

    window.addEventListener("resize", () =>
        setTimeout(function () {
            setWidth(window.innerWidth);
            if (width > 766) {
                setNav(false);
            }
        }, 0)
    );

    return (
        <header className="sticky top-0  w-full bg-[#000300] z-30">
            <div className="flex justify-between items-center p-3 max-w-[1240px] mx-auto px-4 text-white">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                    Deepak
                </h1>
                <ul className="hidden md:flex hover:cursor-pointer">
                    <li className="p-4">
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="about"
                            smooth={true}
                            offset={-200}
                            duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="achievements"
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Achievements
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div
                    onClick={handlenav}
                    className="block md:hidden absolute top-5 right-4">
                    {nav ? (
                        <AiOutlineClose className="text-3xl" />
                    ) : (
                        <AiOutlineMenu className="text-3xl" />
                    )}
                </div>
                {/* for size lower than medium */}
                <ul
                    className={
                        nav
                            ? "bla_bla fixed z-40 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                            : "fixed left-[-100%]"
                    }>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                        dk_sensei
                    </h1>

                    <li className="p-4">
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="about"
                            smooth={true}
                            offset={-200}
                            duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="achievements"
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Achievements
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="p-4">
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-50}
                            duration={500}>
                            Contact
                        </Link>
                    </li>
                    {/* <li className='p-4' onClick={handlenav}>Close</li> */}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
