import React, { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCurrentUserStore from "store/foruser";
import toast from "react-hot-toast";
const Register = () => {
  const[isloading,setIsloading]= useState(false)
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [file, setFile] = useState(null);
  const setUser = useCurrentUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleButton = async (e) => {
    setIsloading(true)
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("firstName", fname);
    formData.append("lastName", sname);
    formData.append("email", email);
    formData.append("password", password1);
    formData.append("confirmPassword", password2);
    try {
      console.log("Form Data:", Object.fromEntries(formData));
      
      const response = await axios.post('http://localhost:8000/user/auth/register', formData,{
        withCredentials:"true"
      });
    
      console.log("Response:", response);
      if (response.status !== 201) {

        throw new Error('Network response was not ok');
    }
      const data = response.data;
      console.log("Registration successful:", data.userId);
      console.log(data.message);
      toast.success(data.message)
      setUser(data.user);
      setIsloading(false)
      navigate(`/verify?userId=${data.userId}`);
    } catch (error) {
      console.error('An error occurred:', error);
    }}
    
  return (
    <>
      <div  className="bg-white-A700 justify-end mx-auto w-full">
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
            <div style={{Top:"100px"}} className="relative top-1/4 bg-white-A700_02  bottom-[0] flex flex-col font-istokweb inset-x-[0] items-center justify-end mx-auto p-[23px] sm:px-5 rounded-[20px] sm:w-[90%] w-[51%]">
              <div className="flex flex-col gap-[52px] items-center justify-start mt-5 w-[85%] md:w-full">
                <div className="flex flex-row gap-[31px] items-center justify-center md:pr-10 sm:pr-5 pr-[78px] w-[62%] md:w-full">
                  <div className="md:h-[52px] h-[53px] relative w-[45%]">
                    <Text
                      className="absolute inset-[0] sm:text-[26px] justify-center m-auto text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-500 w-max"
                      size="txtIstokWebBold36"
                    >
                      انشاء حساب
                    </Text>
             
                    <Line className="absolute bg-blue_gray-500 bottom-[0] h-[3px] inset-x-[0] mx-auto w-[200px]" />
                  </div>
                 
                </div>
                <div className="flex flex-col items-center justify-start w-full">
     
                <Input
                    value={fname}
                    onChange={(e)=>setFname(e.target.value)}
                    placeholder="ادخل الاسم الاول"
                    className="mt-10 leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="text"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                    style={{direction:"rtl",textAlign:"right"}}
                  ></Input>

                <Input
                    value={sname}
                    onChange={(e)=>setSname(e.target.value)}
                    placeholder="ادخل اسم العائلة"
                    className="mt-10 leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="text"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                    style={{direction:"rtl",textAlign:"right"}}
                  />
                            <Input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="ادخل حساب الايميل"
                    className="mt-10 leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="email"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                    style={{direction:"rtl",textAlign:"right"}}
                  />
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[49px] w-[99%] md:w-full">
                  <Input
                    value={password1}
                    onChange={(e)=>setPassword1(e.target.value)}
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
                   <Input
                    value={password2}
                    onChange={(e)=>setPassword2(e.target.value)}
                    placeholder="ادخل تلاكيد كلمة السر"
                    className="mt-10 leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-500_8c sm:text-xl text-2xl text-left w-full"
                    wrapClassName="pl-[3px] w-full"
                    type="email"
                    color="blue_gray_500"
                    size="xs"
                    variant="underline"
                    style={{direction:"rtl",textAlign:"right"}}
                  ></Input>
                  
                 <div style={{marginTop:"20px",backgroundColor:"#ffddd3",borderRadius:"20px"}}>
                  <Input
  onChange={handleFileChange}
  className="border-0"
  style={{border:"none"}}
  placeholder="اختر صورة"
  type="file"
  accept="image/*"
  // style={{direction:"rtl",textAlign:"right"}}
/></div>
                  <a
                    href="javascript:"
                    className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl "
                  >
                    <Button style={{display:"flex",alignItems:"center"}} onClick={handleButton} size="txtIstokWebBold24">{ isloading && <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>}
              ارسال</Button>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
    </>
  );
};

export default Register;
