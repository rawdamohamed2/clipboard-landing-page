import React from 'react'
import logoGoogle from '../../assets/logo-google.png'
import logoHp from '../../assets/logo-hp.png'
import logoMicrosoft from '../../assets/logo-microsoft.png'
import logoIbm from '../../assets/logo-ibm.png'
import logoVectorGraphics from '../../assets/logo-vector-graphics.png'
export default function Logos() {
  return (
    <section className='container mx-auto pt-[7rem] pb-[5rem]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:gap-8 gap-16 md:justify-start justify-center">
            <img src={logoGoogle} alt=""  className='w-[130px] h-[50px] mx-auto'/>
            <img src={logoIbm} alt=""  className='w-[130px] h-[50px] mx-auto'/>
            <img src={logoMicrosoft} alt=""  className='w-[130px] h-[50px] mx-auto'/>
            <img src={logoHp} alt=""  className='w-[130px] h-[50px] mx-auto'/>
            <img src={logoVectorGraphics} alt=""  className='w-[130px] h-[50px] mx-auto'/>
        </div>
    </section>
  )
}
