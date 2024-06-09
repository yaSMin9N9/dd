import React, { useEffect, useState } from 'react'
import img1 from "./im1.gif"
import img2 from "./im2.gif"
import img3 from "./im3.gif"
import img4 from "./im4.gif"
import Header from 'components/Header'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
function ChoosePayment() {
   const {id}= useParams();
   const[isloading,setIsloading]=useState(true);
   useEffect(() => {
    // Simulating page loading delay
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
        {isloading ?(<BounceLoader color="#dd7048" style={{position:"absolute",top:"50%", right:"50%"}}/>) :(<><Header className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
        <div  className='flex mt-[150px] items-center justify-center sm:flex-col'>
        {/* <div style={{margin:"10px"}} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img1} width={300} height={300} alt="" />
    </a>
    <div class="p-5">
         <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           اختيار
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
    
</div> */}
<div style={{margin:"10px"}} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img2} width={300} height={300} alt="" />
    </a>
    <div class="p-5">
        <Link  to={`/payment/${id}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            اختيار  
        </Link>
    </div>
    
</div>
<div style={{margin:"10px"}} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img3} width={300} height={300} alt="" />
    </a>
    <div class="p-5">
    <Link  to={`/payment/${id}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            اختيار
        </Link>
    </div>
    
</div>
<div style={{margin:"10px"}} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img4} width={300} height={300} alt="" />
    </a>
    <div class="p-5">
    <Link  to={`/payment/${id}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            اختيار  
        </Link>
    </div>
    
</div>
    </div></>)}
    </div>
  )
}

export default ChoosePayment