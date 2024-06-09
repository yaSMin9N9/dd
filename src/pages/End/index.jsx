import Header from 'components/Header'
import React from 'react'

function End() {
  return (
    <div>
        <div className="bg-white-A700 flex flex-col font-abel sm:gap-10 md:gap-10 gap-[3593px] items-start justify-end mx-auto w-full">
    <div className="flex flex-col md:gap-10 gap-[97px] items-center w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
        <div style={{backgroundColor:"#B4B4B3"}} className="  font-dmserifdisplay md:h-[271px] h-[272px] md:px-5 relative w-full">
        <div style={{display:"flex",flexDirection:"column",position:"absolute",right:"40px",top:"70px"}}> 
 <div><h1 style={{color:"white", margin:"10px"}} className=" text-[40px] sm:text-[20px]" > .. تم انتهاء الخدمة بنجاح  </h1>
 </div>
 </div>
 </div>
 </div>
</div>
</div>
    </div>
  )
}

export default End