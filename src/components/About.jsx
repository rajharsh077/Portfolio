import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const About = () => {
  const ref=useRef()
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(ref.current,{
      // opacity:0,
      duration:0.5,
      y:30
      // x:-20
    })
  })
  return (
    <>
    <div className='sm:w-screen'ref={ref}>
    <div className='w-11/12 mt-16 ml-20 flex gap-12 '>
     <img className='h-[780px] w-[30%] object-cover bg-cover' src='/images/mec2.jpg'></img>
     <div>
      <h2 className='font-bold text-5xl'>Hi,</h2>
      <p className='text-xl mt-5 leading-9'>Hello! I’m Harsh Raj, from a very religious state Bihar. After Completion of my 12th from Patna where I used to live , I decided to choose engineering as my profession. So I came to Chitkara University,located in the vibrant state of Punjab in 2023 to fulfill my dreams and explore and learn about the Tech World. From the 1st year in my college I had a keen interest in Web development.Currently,I am in my second-year as a B.Tech student specializing in Computer Science. My journey in technology began with a keen interest in how the web shapes our world, and I’m eager to dive deeper into the realm of web development.<br/><br/>

I have developed a solid foundation in programming languages such as C,C++,HTML, CSS, and JavaScript, and I am continuously expanding my skill set by exploring frameworks like React and Node.js. My goal is to create dynamic, user-friendly websites that not only meet the needs of users but also deliver engaging experiences.

Beyond coding, I enjoy collaborating on projects, where I can blend creativity with technical expertise.<br/><br/> I’m always on the lookout for opportunities to learn and grow, whether through internships, workshops, or personal projects. My ambition is to become a proficient web developer who can contribute to innovative solutions and make a positive impact in the tech industry.

In my free time, I love exploring new technologies, participating in hackathons, and sharing my knowledge with others. I believe in the power of community and collaboration, and I’m excited to connect with like-minded individuals who share my passion for web development.

Feel free to reach out if you’d like to collaborate, share ideas, or simply chat about tech!</p>
     </div>
  
    </div>
    <div className='flex flex-col w-11/12 pl-44'>
    <div className='flex gap-36 w-11/12 mt-28'>
        <h2 className='font-semibold text-5xl underline'>Education</h2>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold'>Graduation</h2>
          <p className='font-medium'>Chitkara University</p>
          <p>2023-2027</p>
          <p>Grade: 9.4 CGPA</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold'>Intermediate</h2>
          <p className='font-medium'>T.P.S College(Patna)</p>
          <p>2023</p>
          <p>Grade: 81.2%</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-bold'>10th</h2>
          <p className='font-medium'>Shivam Convent</p>
          <p>2021</p>
          <p>Grade: 84.6%</p>
        </div>
      </div>
      <div className='flex gap-36 w-11/12 mt-28'>

      <h2 className='font-semibold text-5xl underline'>Skills</h2>
      <div className='flex flex-col'>
      <p className='text-xl'>I have a very strong fondation in C,C++,HTML,CSS,Javascript,Bootstrap,GSAP,Tailwind CSS,React JS,SQL</p>
      <p className='mt-10 text-xl'>Currently,I am learning Three.js to create 3D graphics for the web. After that, I plan to dive into backend development<br /> to build complete, dynamic applications. </p>
      <p className='mt-10 text-xl'>In addition to coding, I enjoy collaborating on projects and participating in hackathons, where I can learn from others and share my own insights.</p>
      </div>
        
        
      </div>


      <div className='flex gap-32 w-11/12 mt-28'>

<h2 className='font-semibold text-5xl underline'>Experiences</h2>
<div className='flex flex-col'>
<p className='text-xl'>In 1st Year of my College, I developed a quiz game using HTML, CSS, Bootstrap, and JavaScript. </p>
<p className='mt-10 text-xl'>Currently, I'm working on a clothing website as part of a college project in my 2nd Year.  </p>
<p className='mt-10 text-xl'>Additionally, I’ve created a frontend clone of Netflix and Amazon using HTML,CSS,Tailwind, along with<br /> various smaller projects using GSAP and React JS.</p>
</div>
  
  
</div>
    </div>
  
<br />
<br />
<hr className='m-14 w-11/12' />

</div>
    </>
  )
}

export default About
