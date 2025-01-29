import React from "react";

const Newsletter = () => {
    return (
        <div name="achievements" className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold">
                        Achievements
                    </h1>
                    {/* <p className='my-2 mx-1'>Just send An email</p> */}
                </div>
                <div className="my-3">
                    {/* <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='kalitadimpal112@gmail.com'/>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
              </div> */}
                    <div className="md:flex-row">
                        <li>Specialist (max-1438) in codeforces</li>
                        <li>3⭐ (max-1717) in codechef</li>
                        <li>Global rank 347 in Leetcode Weekly Contest 364</li>
                        <li>Top 10.1% on Leetcode</li>
                        <li>Global rank 194 in Codechef Starters 80 (div 2)</li>
                        {/* <span className='text-[#00df9a] border-b'>kalitadimpal112@gmail.com</span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
