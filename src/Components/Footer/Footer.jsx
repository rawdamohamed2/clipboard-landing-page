import React from 'react'
import logo from '../../assets/logo.svg';
export default function Footer() {
  return (
    <footer>
        <div className="container mx-auto md:gap-0 gap-[1rem] flex md:flex-row flex-col mt-[5.5rem] p-5 min-h-[110px] items-center w-full md:justify-between justify-center items-center">
            <img src={logo} alt="" className='w-[50px] h-[50px] mb-2'/>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[4rem] gap-[1rem]">
                    <div className="flex  flex-col md:items-start items-center gap-2">
                        <p className='text-Gray700 hover'>FAQs</p>
                        <p className='text-Gray700 hover'>Contact Us</p>
                    </div>
                    <div className="flex flex-col md:items-start items-center gap-2">
                        <p className='text-Gray700 hover'>Privacy Policy</p>
                        <p className='text-Gray700 hover'>Press Kit</p>
                    </div>
                    <p className='text-Gray700 hover mb-[1rem]'>Install Guide</p>
                </div>
                <div className="flex gap-3">
                    <i className='fa-brands fa-facebook hover'></i>
                    <i className='fa-brands fa-twitter hover'></i>
                    <i className='fa-brands fa-instagram hover'></i>
                </div>
        </div>
    </footer>
  )
}
