import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Works = () => {
  const ref=useRef()
  const ref1=useRef()
  const ref2=useRef()
  useGSAP(()=>{
    gsap.from(ref.current,{
      // opacity:0,
      scale:0.7,
      stagger:true,
      // y:70,
      scrollTrigger:{
        trigger: ref.current,
        start:"top 100%"
      }
    })
    gsap.from(ref1.current,{
      // opacity:0,
      scale:0.7,
      // y:70,
      scrollTrigger:{
        trigger: ref.current,
        start:"top 100%"
      }
    })
    gsap.from(ref2.current,{
      // opacity:0,
      scale:0.7,
      // y:70,
      scrollTrigger:{
        trigger: ref.current,
        start:"top 100%"
      }
    })
  },[])
  return (
    <>
    <div className='w-11/12 pl-48 pt-20 flex flex-col h-[80vh]'>
    <div className='flex gap-64'>
    <h1 className='text-4xl underline'>Works</h1>
      <div className='flex flex-col'>
      <h2 className='text-3xl font-semibold'>Design Thinking Society, Chitkara University</h2>
      <h2 className='text-2xl'>Technical Team Member</h2>
      <h2 className='text-xl'>2024 - Present</h2>
      <ul className='list-disc mt-4'>
        <li className='text-lg'>Collaborating with the team to develop the official website for the Design Thinking Society.</li>
        <li className='text-lg mt-2'>Involved in the design and implementation of user-friendly features to enhance member engagement.</li>
      </ul>
      <div className='mt-8'>
      <h2 className='text-3xl font-semibold'>IEEE Club, Chitkara University</h2>
      <h2 className='text-2xl'>Web Team Member</h2>
      <h2 className='text-xl'>2024 - Present</h2>
      <ul className='list-disc mt-4'>
        <li className='text-lg'>Working on the IEEE club's website, focusing on the home page and about page.</li>
        <li className='text-lg mt-2'>Contributing to the design and content strategy to improve accessibility and user experience.</li>
      </ul>
      </div>
      
      </div>
      
    </div>
    </div>
    <div className='w-11/12 pl-40 flex flex-col mr-24'>
    <h1 className='text-4xl font-semibold underline'>Projects</h1>
    <div className='flex gap-20 mt-16 pb-36'>
      <div>
        <div ref={ref} className='h-72 w-96 bg-blue-700 overflow-hidden relative'><p className='absolute bottom-0 text-2xl text-white font-bold'>Netflix</p>
          <img className='bg-cover z-40 w-full h-full' src='/images/Netflix.png'></img>
        </div>
      </div>
      <div>
      <div ref={ref1} className='h-72 w-96 bg-blue-700 overflow-hidden relative'><p className='absolute bottom-0 text-2xl font-semibold text-black'>Amazon</p>
          <img  className='bg-cover z-40 w-full h-full' src='/images/amazon.png'></img>
        </div>
      </div>
      <div>
      <div ref={ref2} className='h-72 w-96 bg-blue-700 overflow-hidden relative'><p className='absolute bottom-0 text-2xl text-white'>GSAP Project</p>
          <img className='bg-cover z-40 w-full h-full' src='/images/pro.png'></img>
        </div>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Works
