import React from 'react'

export default function AboutItem({item}) {
  return (
    <div className="head md:text-start text-center ">
        <h2 className='head2Font'>{item.title}</h2>
        <p className='text-Gray500'>{item.text} {item.text1}</p>
    </div>
  )
}
