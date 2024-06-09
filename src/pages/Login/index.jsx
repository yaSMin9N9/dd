import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import useCurrentUserStore from "store/foruser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { BounceLoader } from "react-spinners";

const LoginPage = () => {
  const [isloading,setIsloading]= useState(false)
  const [isloadingg,setIsloadingg]= useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const setUser = useCurrentUserStore((state) => state.setUser);  
  const navigate = useNavigate();
 
  const googleLink = () => {
      const root = "https://accounts.google.com/o/oauth2/v2/auth";
    
      const options = {
        redirect_uri: "http://localhost:8000/user/auth/oauth/google",
        client_id:
          "189238508601-6mr3ntvqt219j660stfjmet6u7kkel04.apps.googleusercontent.com",
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
          "https://www.googleapis.com/auth/userinfo.profile",
          "https://www.googleapis.com/auth/userinfo.email",
        ].join(" "),
      };
    
      const qs = new URLSearchParams(options);
    
      return `${root}?${qs.toString()}` 
    
    };

  const handleButton =async(e)=>{
    e.preventDefault();
    setIsloading(true)
    try {
      const response = await axios.post('http://localhost:8000/user/auth/login', 
      {email,password},{
        withCredentials:"true"
      });
    
      console.log("Response:", response);
    
      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }

      const data = response.data;
      console.log("Registration successful:", data.userId);
      setUser(data.user);
      const token =data.user.accessToken
      setIsloading(false)
      localStorage.setItem("token2",token);
      toast.success(data.message);
      navigate(`/`);
    } catch (error) {
      console.error('An error occurred:', error);
    }}
  const handleforgot =async(e) =>{
    e.preventDefault();
    
  }
  useEffect(() => {
    // Simulating page loading delay
    const timer = setTimeout(() => {
      setIsloadingg(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {isloadingg ?(<BounceLoader color="#dd7048" style={{position:"absolute", right:"50%"}}/>) :(
      <div   className="bg-white-A700 flex flex-col font-abel sm:gap-10 md:gap-10 gap-[786px]  items-center justify-end mx-auto w-full">
        <div className="md:h-[615px] h-[719px] md:px-5 relative w-full">
          <div className=" md:h-[615px] h-[705px] inset-[0] justify-center m-auto w-full">
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
            <div  className="absolute sm:top-[110px] bg-white-A700_02 bottom-[0] flex flex-col font-istokweb inset-x-[0] items-center justify-end mx-auto p-[23px]  sm:px-5 md:p-[20px] rounded-[20px] md:w-[70%] sm:w-[90%] w-[51%]">
              <div  className="flex flex-col gap-[52px] items-center justify-start mt-5 w-[85%] md:w-full">
                <div className="flex flex-row gap-[31px] items-center justify-center md:pr-10 sm:pr-5 pr-[78px] w-[62%] md:w-full">
                  <div className="md:h-[52px] h-[53px] relative w-[45%]">
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-4xl sm:text-[26px] md:text-[34px] text-blue_gray-500 w-max"
                      size="txtIstokWebBold36"
                    >
                      تسجيل الدخول
                    </Text>
                    <Line className="absolute bg-blue_gray-500 bottom-[0] h-[3px] inset-x-[0] mx-auto w-[250px] sm:w-[150px]" />
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
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[49px] w-[99%] md:w-full">
                  <Input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="ادخل كلمة السر"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="email"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                    style={{direction:"rtl",textAlign:"right"}}
                  ></Input>
                   
                  </div>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <div style={{fontWeight:"bolder"}}>
                  <Button   className=" justify-center mt-[10px] ml-6 pb-[3px] pt-2  rounded-[20px] text-xl md:text-[15px]  w-[40px]" size="txtIstokWebBold24"><Link to="/forgotpass" className=" text-blue_gray-700_01">نعم</Link></Button>
                  </div>
                      <Text
                    className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-500_8c sm:text-xl"
                    size="txtIstokWebRegular24"
                  >
                   هل نسيت كلمة المرور؟
                  </Text></div>
                 
                  
                
                    <Button style={{display:"flex",alignItems:"center"}} className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl " onClick={handleButton} size="txtIstokWebBold24"> 
                  { isloading && <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>}
    ارسال</Button>
                  <Text
                    className="mt-[22px] text-2xl md:text-[22px] text-blue_gray-500_8c sm:text-xl"
                    size="txtIstokWebRegular24"
                  >
                    أو
                  </Text>
                  <Button  className="bg-blue_gray-500_8c h-[50px] justify-center mt-[5px] pb-[3px] pt-2 sm:px-5 px-[5px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[190px]" size="txtIstokWebBold24">
                    <Link to={googleLink()}>
  <div style={{display:"flex", justifyContent:"space-around"}}><Img
    className=" bottom-[0] h-[34px] left-[45%]"
    src="images/img_flatcoloriconsgoogle.svg"
    alt="flatcoloriconsg"
  />
  <p style={{color:"white", fontSize:"15px",color:"#000"}} >التسجيل باستخدام</p></div>
  </Link></Button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>)}
    </>
  );
};

export default LoginPage;
