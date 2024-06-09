import axios from "axios";
import { Input } from "components";
import Header from "components/Header";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const PaymentBank = () => {
  const { advId, paramId } = useParams();
    console.log("hi"+ advId);
    console.log(paramId);
    const token = localStorage.getItem("token2")
    const [file,setFile] =useState()
    const navigate =useNavigate()
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      };
      const handleButton = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
         formData.append("advisorId", advId);
         formData.append("serviceId", paramId);
    
        try {
          console.log("Form Data:", Object.fromEntries(formData));
          
           await axios.post('http://localhost:8000/user/booking/bankRegister', formData,{
            withCredentials:"true",
            headers:{
              "Authorization": `Bearer ${token}`
            }
            
          });
          toast.success("تم ارسال طلبك بنجاح")
          navigate(`/choosefromhere/${paramId}`)
        } catch (error) {
          console.error('An error occurred:', error);
        }}
        
  return (
    <>
   <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"50px"}}>
      <h6 className="text-blue_gray-700_01 sm:m-11 sm:text-[11px] " style={{fontSize:"40px"}}>رجاءاً إرسال صورة لدفع الفاتورة</h6>
        <div style={{marginTop:"40px",backgroundColor:"#ffddd3",borderRadius:"20px"}}>
                  <Input
  onChange={handleFileChange}
  style={{border:"none"}}
  placeholder="Choose file"
  type="file"
  accept="image/*"
/></div>
<a
                    href="javascript:"
                    className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[150px]"
                  >
                    <Button onClick={handleButton} size="txtIstokWebBold24">ارسال</Button>
                  </a>
    </div>
  
    </>
  );
};
export default PaymentBank;
