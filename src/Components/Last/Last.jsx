import React from 'react'

export default function Last() {
  return (
    <section className='container mx-auto flex flex-col items-center pt-[5.5rem] text-center xl:px-[24rem] px-[0.6rem]'>
        <h1 className='headFont'>Clipboard for iOS and Mac OS</h1>
        <p className='text-Gray500'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</p>
        <div className="btns flex md:flex-row flex-col gap-3 mt-9">
            <button type='button' className='btn bg-green shadow-[0_0.2rem_hsl(171,66%,35%)] transition duration-200 md:w-auto w-full'>Download for iOS</button>
            <button type='button' className='btn bg-blue shadow-[0_0.2rem_hsl(233,100%,63%)] transition duration-200 md:w-auto w-full'>Download for Mac</button>
        </div>
    </section>
  )
}
