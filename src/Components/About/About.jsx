import React from 'react';
import imageComputer from '../../assets/imageComputer.png';
import data from './AboutData';
import AboutItem from './AboutItem/AboutItem.jsx';
export default function About() {
    console.log(data);
    
  return (
    <section className='min-h-dvh pt-[5rem]'>
            <div className="header text-center xl:px-[24rem] px-[1.29rem]">
                <h1 className='headFont'>Keep track of your snippets</h1>
                <p className='text-Gray500'>Clipboard instantly stores any item you copy in the cloud, 
                    meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will 
                    help you organize everything.</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[5rem] ">
                <img src={imageComputer} alt="" className='w-full h-full md:px-0 px-4 relative top-0 md:left-[-2rem] left-0 '/>
                <div className="flex flex-col md:gap-16 gap-8 justify-start py-10 md:px-[2.9rem] px-[0.9rem]">
                    {
                        data.map((item, index) => {
                            return (<AboutItem key={index} item={item}/>)
                        })
                   }
                </div>
            </div>
            
    </section>
  )
}
