import React from 'react'
import imageDevices  from '../../assets/imageDevices.png'
export default function Clipboard() {
  return (
    <section className='flex flex-col container mx-auto pt-[4.8rem]'>
        <div className="header text-center xl:px-[24rem] px-[0.6rem]">
            <h1 className='headFont'>Access Clipboard anywhere</h1>
            <p className='text-Gray500 '>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
        </div>
        <img src={imageDevices} alt=""  className='md:max-w-4xl w-full h-full mx-auto pt-[5rem]'/>
    </section>
  )
}
