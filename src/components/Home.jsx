import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const ref=useRef();
  const ref1=useRef();
  const ref2=useRef();
  const ref3=useRef();
  const ref4=useRef();
  const ref5=useRef();
  const navigate=useNavigate();
  function about(){
     navigate("/about")
  }
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(ref3.current,{
      opacity:0,
      duration:0.7,
      y:50
    })
    gsap.from(ref.current,{
      opacity:0,
      duration:0.7,
      y:50
    })
    
    gsap.from(ref1.current,{
      opacity:0,
      y:100,
      duration:0.5,
      scrollTrigger: {
        trigger: ref1.current,
        // markers:true,
         start: "top 85%",
      },
    })
    gsap.from(ref2.current,{
      opacity:0,
      y:100,
      duration:0.5,
      scrollTrigger: {
        trigger: ref2.current,
        start: "top 85%",
        // markers:true,
      },
    })
    gsap.from(ref4.current,{
      opacity:0,
      y:100,
      duration:0.5,
      scrollTrigger: {
        trigger: ref2.current,
        start: "top 85%",
        // markers:true,
      },
    })
    gsap.from(ref5.current,{
      opacity:0,
      y:100,
      duration:0.5,
      scrollTrigger: {
        trigger: ref2.current,
        start: "top 85%",
        // markers:true,
      },
    })
  },[])
  return (
    <>
    <div id='page1' className='w-11/12 flex flex-col justify-center mx-16 h-screen'>
    <div className='w-full h-screen text-white bg-black rounded-3xl flex items-center p-28 gap-80'>
       <div ref={ref3} className='leading-5 w-[60%] '>
        <p className='text-2xl'>Hello</p>
        <h2 className='text-8xl bold text-amber-400'>I'm Harsh</h2>
        <p className='text-2xl mt-6'>Front End Developer</p>
        <p className='text-xl mt-2'>Chitkara University</p>
        <p className='text-2xl mt-12 leading-9'>Hi there! I’m a passionate and aspiring front-end developer with a love for crafting seamless user experiences. With experience in building projects with responsive and interactive web applications, I specialize in C, C++, HTML, CSS, JavaScript,GSAP,Tailwind, React JS , etc.</p>
       </div>
       <div id='img'ref={ref} className='w-[40%]'>
        <img src='https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'className='w-full h-full'></img>
       </div>
    </div>
    </div>

    <div id='page2'className='w-11/12 flex flex-col justify-center mx-16 h-screen mt-10'>
      <div>
      <h3 ref={ref5} className='opacity-70 text-5xl'>About Me</h3>
      <div className='flex mt-28 gap-32'>
        <img ref={ref1} src='https://framerusercontent.com/images/muH2zRcsvbqdSmGRcSstWRXuYo.png'></img>
        <div className='info'>
          <h3 ref={ref2} className='text-5xl'>Hi I’m Harsh and I am passionate about everything that has to do with Web Development and Web Design. I enjoy working in web projects and with enthusiastic people who is eager in Website Development through beautiful designs and experiences.</h3>
          <button onClick={about} ref={ref4} className='mt-4 p-4 border-2 bg-amber-700 text-white rounded-full font-semibold'>Know More</button> 
        </div>
      </div>
    </div>
    </div>
    
    </>
    
  )
}

export default Home
