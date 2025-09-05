import React from 'react'

export default function Workflowitem({item}) {
  return (
    <div className="card text-center">
        <img src={item.img} className="w-[40px] h-[35px] mx-auto" alt="" />
        <div className="cardBody py-5 ">
            <h2 className='head2Font pb-5'>{item.title}</h2>
            <p className='text-Gray500'>{item.text} {item.text1} {item.text2}</p>
        </div>
    </div>
  )
}
