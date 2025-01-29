import React from 'react'

const SkillCard = (prop) => {
     // console.log(skill);
  return (
    <div>
     {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 font-serif'> */}
          <div className='cpp  w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='flex justify-center font-bold heading border-b-2 py-2'>
                <img src={prop.skill.logo} alt={prop.skill.alt} className='w-6 mx-2' />
                {prop.skill.name}
              </div>
              <div className='skill about py-3'>
               {prop.skill.data}
              </div>
          </div>
     {/* </div> */}
    </div>
  )
}

export default SkillCard
