import React, { useEffect, useState } from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";
import { Link, useParams } from "react-router-dom";
import ConnectUs from "pages/ConnectUs";
import Footer from "components/Footer";
import Navbar from "components/Header";
import axios from "axios";
import { useFetchBooking } from "components/hooks/useEffect";

const HomepagePage = () => {
  const[services, setServices]= useState([])
  const[isloading,setIsloading]=useState([])
  
 
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get("http://localhost:8000/user/services", {
            withCredentials: true,
          });
          console.log("Response:", response);
          if (response.status !== 200) {
            throw new Error("Network response was not ok");
          }
          const data = response.data;
          console.log("Services data:", data);
          setServices(data);
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      };
  
      fetchServices();},[])
     
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full ">
        <div className="flex flex-col items-center justify-start w-full">
          <div className=" h-[615px] relative w-full">
            <Img
              className="h-[603px] md:h-[603px] m-auto object-cover w-full"
              src="images/img_union.png"
              alt="union"
            />
            <div className="absolute h-[615px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[615px] m-auto object-cover w-full"
                src="images/img_union_615x1440.png"
                alt="union_One"
              />
              <Navbar className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
              <Img
                className="absolute bottom-[24%] h-[294px] md:h-[180px] sm:h-[140px] inset-x-[0] mx-auto object-cover w-[21%]"
                src="images/img_photo2024012.png"
                alt="photo2024012"
              />
            </div>
          </div>
        
          <Text
            className="mt-4 sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-700 text-center"
            size="txtAbelRegular35"
          >
            خدماتنا
          </Text>
          <div className="bg-deep_orange-500 border border-solid h-[11px] mt-4 md:px-5 w-[10%]"></div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3  justify-start max-w-[2096px] mt-[90px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
           
           {
           services?.map((service,index)=>(
                        <div key={index} className="ml-20 flex flex-col h-[209px] md:h-auto items-center justify-center md:w-auto w-[347px]">
              <Link to={`/choosefromhere/${service._id}`} 
              className="bg-white-A700 flex flex-col gap-2.5 items-start justify-center px-2 sm:px-5 py-[30px] rounded-[20px] shadow-2xl w-[328px]">
                <Img
                  className="h-12 w-12"
                  src={service.image}
                  alt="icnsettingsicnl"
                />
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtAbelRegular24"
                >
                {service.name}
                </Text>
                <Text
                  className="leading-[20.00px] text-gray-600 text-sm tracking-[0.20px]"
                  size="txtOpenSans14"
                >
                 
                </Text>
              </Link>
            </div>
           ))
           }
          </List>      
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomepagePage;
