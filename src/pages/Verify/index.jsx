import React, { useState} from "react";
import Axios from "axios";
import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import {  useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import useCurrentUserStore from "store/foruser";


const Verify = () => {

  const navigate =useNavigate()
  const [code, setCode] = useState("");
  const[searchparams,setSearchparams]=useSearchParams()
  const userId = searchparams.get("userId")
  const handleButton = async (e) => {
    e.preventDefault();
    
    if (!userId) {
      console.error('User ID is not available');
      return;
    }
  

    try {
      const response = await Axios.post('http://localhost:8000/user/auth/verify', {userId, otp:code});
      console.log("Response:", {userId, otp:code});
      
      if (!response.data) {
        throw new Error('Network response was not ok');
      }

      if (response.status === 200) {
        toast.success(response.data.message)
        const token =response.data.user.accessToken        ;
        console.log(response.data.user.accessToken);
        navigate(`/`);
      }

      console.log("Verification successful:", response.data);
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error(error.message)
    }
  };
  
  const handleResend = async (e) => {
    e.preventDefault();
    
  
    try {
      const response = await Axios.post('http://localhost:8000/user/auth/resend', {userId});
      console.log("Response:", {userId});
      if (response.status !== 200) {
        const err = new Error('Network response was not ok');
        toast.error(err.message);
        throw err;
    }
      toast.success(response.data.message)
      console.log("Verification successful:", response.data.message);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-abel sm:gap-10 md:gap-10 gap-[786px] items-center justify-end mx-auto w-full">
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
            <div className="absolute bg-white-A700_02 bottom-[0] flex flex-col font-istokweb inset-x-[0] items-center justify-end mx-auto p-[23px] sm:px-5 rounded-[20px] sm:w-[90%] w-[51%]">
              <div className="flex flex-col gap-[52px] items-center justify-start mt-5 w-[85%] md:w-full">
                <div className="flex flex-row gap-[31px] items-center justify-center md:pr-10 sm:pr-5 pr-[78px] w-[62%] md:w-full">
                  <div className="md:h-[52px] h-[53px] relative w-[45%]">
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-500 w-max"
                      size="txtIstokWebBold36"
                    >
                      التحقق
                    </Text>
                    <Line className="absolute bg-blue_gray-500 bottom-[0] h-[3px] inset-x-[0] mx-auto w-full" />
                  </div>
                  
                </div>
                <Text
                    className="mt-[-22px] mb-[22px] text-2xl md:text-[22px] text-blue_gray-500_8c sm:text-xl"
                    size="txtIstokWebRegular24"
                  >
                   ادخل الكود المرسَل الى ايميلك
                  </Text>
                  
                <div className="flex flex-col items-center justify-start w-full">
               
                  <Input
                    value={code}
                    onChange={(e)=>setCode(e.target.value)}
                    placeholder="ادخله هنا"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="text"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                  />
                
                    <Button  className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[190px]" onClick={handleButton} size="txtIstokWebBold24">send</Button>
                  <Text
                    className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-500_8c sm:text-xl"
                    size="txtIstokWebRegular24"
                  >
                    اعادة ارسال الرمز
                  </Text>
                  <Button  className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[190px]" onClick={handleResend} size="txtIstokWebBold24">Resend</Button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
    </>
  );
};

export default Verify;
