import React, { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import axios from "axios";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const[email,setEmail]=useState("")

  const handleforgot =async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/auth/forgotPassword', 
      {email},{
        withCredentials:"true"
      });
    
      console.log("Response:", response);
    
      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }

      const data = response.data;
      console.log("Registration successful:", data.userId);
      toast.success(data.message);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  return (
    <>
      <div style={{marginBottom:"50px"}} className="bg-white-A700 flex flex-col font-abel sm:gap-10 md:gap-10 gap-[786px] items-center justify-end mx-auto w-full">
        <div className="md:h-[615px] h-[719px] md:px-5 relative w-full">
          <div className="absolute md:h-[615px] h-[705px] inset-[0] justify-center m-auto w-full">
            <div className="absolute h-[615px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[603px] m-auto object-cover md:w-full"
                src="images/img_union.png"
                alt="union"
              />
              <div className="absolute h-[615px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[615px] m-auto object-cover w-full"
                  src="images/img_union_615x1440.png"
                  alt="union_One"
                />
                <Header className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
              </div>
            </div>
            <div className="absolute bg-white-A700_02 bottom-[0] flex flex-col font-istokweb inset-x-[0] items-center justify-end mx-auto p-[23px]  sm:px-5 md:p-[20px] rounded-[20px] md:w-[70%] sm:w-[90%] w-[51%]">
              <div className="flex flex-col gap-[52px] items-center justify-start mt-5 w-[85%] md:w-full">
                <div className="flex flex-row gap-[31px] items-center justify-center md:pr-10 sm:pr-5 pr-[78px] w-[62%] md:w-full">
                  <div className="md:h-[52px] h-[100px] relative w-[45%]">
                    <Text
                      className=" h-max inset-[0] justify-center m-auto text-2xl sm:text-[20px] md:text-[34px] text-blue_gray-500 w-max"
                      size="txtIstokWebBold36"
                    >
                      هل نسيت كلمة المرور ؟؟
                    </Text>
                    </div>
                  
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="ادخل حساب الايميل"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="email"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                    style={{direction:"rtl",textAlign:"right"}}
                  />
                  <Button  onClick={handleforgot} className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[190px]" size="txtIstokWebBold24">
                         ارسال
                </Button>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={{fontWeight:"bolder"}}>
                  <Button   className=" justify-center mt-[10px] ml-6 pb-[3px] pt-2  rounded-[20px] text-xl md:text-[15px]  w-[40px]" size="txtIstokWebBold24"><Link to='/login' className=" text-blue_gray-700_01">نعم</Link></Button>
                  </div>
                      <Text
                    className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-500_8c sm:text-xl"
                    size="txtIstokWebRegular24"
                  >
                    ذهاب الى صفحة تسجيل الدخول
                  </Text></div>
                 
                 
                </div>
              </div>
            </div>
          </div>
        
        </div>
       
      </div>
    </>
  );
};

export default ForgotPassword;
