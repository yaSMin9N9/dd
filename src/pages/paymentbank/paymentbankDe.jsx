import axios from "axios";
import ForBank from "pages/ForBank";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const PaymentBankDe = () => {
  const { id } = useParams();
    console.log("hi"+ id);
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
         formData.append("serviceId", id);
    
        try {
          console.log("Form Data:", Object.fromEntries(formData));
          
           await axios.post('http://localhost:8000/user/booking/design/bankRegister', formData,{
            withCredentials:"true",
            headers:{
              "Authorization": `Bearer ${token}`
            }
            
          });
          toast.success("تم ارسال طلبك بنجاح")
          navigate(`/question/${id}`)
        } catch (error) {
          console.error('An error occurred:', error);
        }}
        
  return (
    <ForBank handleButton={handleButton} handleFileChange={handleFileChange}/>
  );
};
export default PaymentBankDe;
