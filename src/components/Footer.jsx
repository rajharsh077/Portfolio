import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const navigate=useNavigate()
    function nav(){
       navigate("/contact")
    }
    function toaster(e){
      e.preventDefault();
      toast('Message Sent', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
        
        
    }
  return (
    <>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    <div id='page3'className='w-full flex flex-col justify-center mt-10 bg-black text-center pb-5 rounded-3xl'>
        <div className='flex flex-col h-[500px] relative'>
        <div className='font-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-8xl text-white font-semibold'>Have a Cool</h1>
            <h1 className='text-8xl text-white font-semibold'>Project?</h1>
            <button onClick={nav} className='px-4 py-3 font-semibold rounded-full bg-orange-600 text-2xl text-white mt-16'>Contact Me</button>
        </div>
        </div>
      <hr className='m-14 opacity-15 w-11/12' />
      <div className='flex justify-between ml-20'>
        <div className='flex flex-col'>
        <img src='/images/ak.png' className='h-[70%]  rounded-full'></img><br />
        <h2 className='text-orange-500 text-2xl font-semibold'>Harsh</h2>
        <h2 className='text-2xl text-white'>Web Developer</h2>
        </div>
        <div>
            <form className='flex flex-col pr-6'onSubmit={toaster}>
                <input type='text' placeholder='Your Name'className='w-[800px] bg-neutral-500 p-3'></input>
                <input type='email' placeholder='Your Email'className='w-[800px] bg-neutral-500 p-3 mt-10'></input>
                <textarea rows="6" cols="105"placeholder='Your Message' className='bg-neutral-500 mt-10 p-3'></textarea>
                <input type='submit'className='bg-red-600 text-white mt-10 w-[12%] p-4 rounded-full'></input>
            </form>
        </div>
      
      </div>
      <hr className='m-14 opacity-15 w-11/12' />
      </div>
    </>
  )
}

export default Footer
