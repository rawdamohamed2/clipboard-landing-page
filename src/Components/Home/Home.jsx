import React from 'react'
import headerBg from '../../assets/headerBg.png';
import logo from '../../assets/logo.svg';
export default function Home() {
  return (
    <section className='min-h-dvh relative'>
         <div className='h-[400px] w-full absolute top-0 left-0 z-[-1]'>
                <img src={headerBg} alt="headerBg" className='w-full h-full'/>
            </div>
        <div className='flex justify-center items-center min-h-dvh container mx-auto md:px-0 px-[0.4rem] md:pt-0 pt-[5rem]'>
                <div className='flex flex-col justify-center items-center gap-4 '>
                <img src={logo} alt="" className='md:w-[120px] w-[100px] md:h-[120px] h-[100px] md:mb-2 mb-9' />
                <h1 className='md:text-[2.7rem] text-[1.9rem] font-bold text-center text-Gray700'>A history of everything you copy</h1>
                <p className='text-Gray500 text-center lg:px-[270px]'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
                <div className="btns flex md:flex-row flex-col md:gap-y-0 gap-y-4 gap-x-4 mt-6">
                    <button type='button' className='btn bg-green shadow-[0_0.2rem_hsl(171,66%,35%)] transition duration-200'>Download for iOS</button>
                    <button type='button' className='btn bg-blue shadow-[0_0.2rem_hsl(233,100%,63%)] transition duration-200'>Download for Mac</button>
                </div>
            </div>
        </div>
    </section>
  )
}
