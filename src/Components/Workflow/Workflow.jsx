import React from 'react';
import fisrt from './WorkflowData';
import Workflowitem from './Workflowitem/Workflowitem.jsx';

export default function Workflow() {
    console.log(fisrt[0].img);
    
  return (
    <section className='container mx-auto pt-[4rem]'>
        <div className="header text-center">
            <h1 className='headFont'>Supercharge your workflow</h1>
            <p className='text-Gray500'>We've got the tools to boost your productivity.</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-y-12 pt-[5rem] md:px-[2.9rem] px-[0.48rem]">
            {
                fisrt.map((item, index) => {
                    return (<Workflowitem key={index} item={item}/>)
                })
            }            
 
        </div>
    </section>
  )
}
