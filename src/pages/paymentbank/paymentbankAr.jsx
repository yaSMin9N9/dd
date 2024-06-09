import axios from "axios";
import ForBank from "pages/ForBank";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const PaymentBankAr = () => {
  const { arId, paramId } = useParams();
    console.log("hi"+ arId , paramId);
    
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
         formData.append("arbitratorId", arId);
         formData.append("serviceId", paramId);
    
        try {
          console.log("Form Data:", Object.fromEntries(formData));
          
           await axios.post('http://localhost:8000/user/booking/arbitration/bankRegister', formData,{
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
    <ForBank handleButton={handleButton} handleFileChange={handleFileChange}/>
  );
};
export default PaymentBankAr;
