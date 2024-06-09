
import React, { useEffect, useState } from "react";
import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import { DotLoader } from 'react-spinners';
import { Link } from "react-router-dom";
import image from "./undo.png"
const ProfileAr = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState([]); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/services/getArbitrators`, {
          method: 'GET',
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
  
        const data = await response.json();
        console.log(data);
        const filteredProfile = data.find(item => item._id === id);
        console.log("Filtered Profile:", filteredProfile);
  
        setProfile(filteredProfile);
        console.log("bbbbbbbb"+ profile);
      } catch (error) {
        // Handling errors
        console.error('An error occurred:', error);
      }
    };
  
    fetchData();
  }, [id]);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-abel items-center justify-end mx-auto w-full">
        {profile? (
         
<div key={profile?._id} className="flex flex-col items-start justify-end w-full">
              <div className="bg-deep_orange-500_33 flex flex-col justify-start pb-[58px] w-full">
                <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  <Image className="md:ml-[0] md:px-5 rounded-[50%] w-[200px] h-[200px]" src={profile?.image} />

                  <Text
                    className="md:ml-[0] mt-[47px] sm:text-[31px] md:text-[33px] text-[30px] text-black-900"
                    size="txtAbelRegular35Black900"
                  >
                    {profile?.firstName} {profile?.lastName}
                  </Text>
                  <Text
                    className="md:ml-[0] mt-[20px] sm:text-[31px] md:text-[30px] text-[20px] text-blue_gray-700_01"
                    size="txtAbelRegular35Black900"
                  >
                    {profile?.email}
                  </Text>

                </div>
              </div>
              <Link to={`/choosefromhere`}>
                <Image src={image} width={50} height={50} />
              </Link>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "end", margin: "10px 50px" }}>
                <Text
                  className="md:ml-[0] mt-[72px] sm:text-[31px] md:text-[33px] text-[30px] text-blue_gray-700_01 text-shadow-ts"
                  size="txtAbelRegular35Bluegray70001"
                >
                  الوصف
                </Text>

                <Text
                  className="leading-[120.00%] ml-1 md:ml-[0] sm:text-2xl md:text-[26px] text-[22px] text-gray-700 text-right w-[96%] sm:w-full"
                  size="txtAbelRegular28"
                >
                  {profile?.profile?.description}
                </Text>
                <Text
                  className="md:ml-[0] mt-[34px] sm:text-[31px] md:text-[30px] text-[30px] text-blue_gray-700_01 text-shadow-ts"
                  size="txtAbelRegular35Bluegray70001"
                >
                  السيرة الذاتية
                </Text>
                <Text
                  className="leading-[120.00%] mt-[52px] sm:text-2xl md:text-[26px] text-[22px] text-gray-700 text-right w-[96%] sm:w-full"
                  size="txtAbelRegular28"
                >
                  {profile?.profile?.cvURL}
                </Text>
               
              </div>
            </div>
          )
           :(<></>)
          
        }
      </div>
    </>
  );
};
export default ProfileAr;
