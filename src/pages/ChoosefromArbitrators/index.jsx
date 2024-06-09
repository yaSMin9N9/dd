import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import Header from "components/Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ChoosefromArbitrators = () => {
  const [advisors, setAdvisors] = useState([]);
  const [booking, setBooking]= useState([])
  const [openAdvisorId, setOpenAdvisorId] = useState(null);
  const token =localStorage.getItem("token2")
  const Navigate = useNavigate();
  
const param = useParams()
console.log("param" + param._id);
  const handleToggle = (advisorId) => {
    setOpenAdvisorId(advisorId === openAdvisorId ? null : advisorId);
   
  };

  const handleItemClick = (item) => {
    // Handle item click
    console.log('Selected item:', item);

    // You can perform any action when an item is clicked, like updating state or executing a function.
  };
  
  const handleroute = (id) => {
    Navigate(`/choosePayment/${id}`);
  };

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/booking`, {
          headers:{
            "Authorization": `Bearer ${token}`
          }
        });
        
        const data = response.data;
        setBooking(data);
       console.log(booking.map((i)=> i.status));
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchBooking();
  }, []);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/services/getArbitrators`, {
          withCredentials: true,
          headers:{
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = response.data;
        setAdvisors(data);
        console.log(advisors);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);
  

  return (
    <>
      <div className="bg-white-A700 font-abel items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
          <div style={{ position: "relative" }} className="grid grid-cols-3 md:grid-cols-1 gap-5 max-w-[1109px] mt-[35px] mx-auto md:px-5 w-full">
            {advisors.map((adv, index) => (
              <div key={index} className="bg-white-A700 m-5 flex flex-col md:gap-10 gap-16 h-auto md:h-auto items-center justify-start pb-[50px] pt-16 md:px-10 sm:px-5 rounded-[32px] shadow-bs1 w-[350px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-700_01 text-center w-full"
                    size="txtAbelRegular28Bluegray70001"
                  >
                    {adv.firstName} {adv.lastName}
                  </Text>
                </div>
                <Img
                  className="h-[220px] md:h-auto rounded-[50%] w-[220px]"
                  src={adv.image}
                  alt="ellipseTwentySix"
                />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "250px" }}>
                  <Link to={`/profile/${adv._id}`}>
                    <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                      التفاصيل
                    </Button>
                  </Link>
                  {/* {(!booking || booking.some(i => i.status !== "inProgress")) && ( */}
  <Button 
    onClick={() => handleToggle(adv._id)} 
    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  >
    اختيار
  </Button>
{/* )} */}

                  {openAdvisorId === adv._id && (
                    <div style={{ position: "absolute",backgroundColor:"#fff" }} className="mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                      <ul>
                        <Link to={`/paymentBankAr/${adv._id}/${param._id}`}>
                        <li onClick={() => handleItemClick('Item 1')} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          الدفع عن طريق البنك
                        </li>
                        </Link>
                        <li onClick={() => handleroute(param._id)} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        الدفع عن طريق البطاقة الائتمانية
                        </li>
                       
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosefromArbitrators;
