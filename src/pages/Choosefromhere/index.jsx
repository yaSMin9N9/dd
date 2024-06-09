import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import Header from "components/Header";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import PopChat from "components/chat";
import FAQ from "components/Accordion/FAQ";
import { downloadFile } from "components/downloadFile/downloadFile";
import toast from "react-hot-toast";

const ChoosefromherePage = () => {
  const [answers, setAnswers] = useState({});
  const [advisors, setAdvisors] = useState([]);
  const [booking, setBooking] = useState([]);
  const [book, setBook] = useState([]);
  const [openAdvisorId, setOpenAdvisorId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token2");
  const navigate = useNavigate();
  const { _id: paramId } = useParams();

  const fetchBooking = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/user/booking/${paramId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooking(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleToggle = async () => {
    try {
      await fetch("http://localhost:8000/user/booking/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ answers }),
      });
      setAnswers({});
      toast.success("تم ارسال اجابتك بنجاح");
      fetchBooking();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleToggl = (advisorId) => {
    setOpenAdvisorId(advisorId === openAdvisorId ? null : advisorId);
  };

  const closebuttonn = async () => {
    try {
      await axios.post('http://localhost:8000/user/booking/design/close', {
        bookingId: booking.bookingId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      fetchBooking();
      navigate("/End");
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const closebutton = async () => {
    try {
      await axios.post('http://localhost:8000/user/booking/arbitration/close', {
        bookingId: booking.bookingId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      fetchBooking();
    } catch (error) {
      console.error('An error occurred:', error);
    }
     try {
      const response = await axios.get(`http://localhost:8000/user/booking/${paramId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooking(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleTogglee = async () => {
    try {
      await axios.post('http://localhost:8000/user/booking/skip', {
        serviceId: paramId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      toast.success("تم الانتقال للمرحلة التالية بنجاح");
      try {
        const response = await axios.get(`http://localhost:8000/user/booking/${paramId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooking(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleDes = (id) => {
    navigate(`/QuestionDesign/${id}`);
  };

  const handleroute = (id) => {
    navigate(`/choosePayment/${id}`);
  };

  const handleNo = () => {
    navigate("/QuestionDesign");
  };

  const handleItemClick = (item) => {
    console.log('Selected item:', item);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/user/booking', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error(error.message);
      }
    };

    fetchBookings();
    fetchBooking();
  }, [paramId, token]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/services/getAdvisors/${paramId}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAdvisors(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [paramId, token]);

  return (
    <>
      <div className="bg-white-A700 font-abel items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
          {book.some(boo => boo.serviceId === paramId) ? (
            isLoading ? (
              <BounceLoader color="#dd7048" style={{ position: "absolute", top: "50%", right: "50%" }} />
            ) : (
              booking ? (
                <div>
                {booking?.bookingStatus === "arbitration" && (
      <>
          
          {/* <Text style={{color:"#235f80" ,margin:"50px"}} className="mb-8 absolute top-20 right-20 sm:text-[40px] md:text-[46px] text-[30px]" size="txtDMSerifDisplayRegular50">:عرض المراحل</Text>
           */}
        <div style={{display:"flex",width:"100vw",flexDirection:"column",alignItems:"center",marginTop:"50px"}}>
        {booking?.stages.map((stage)=>(
         <table style={{display:"flex",alignItems:"start",justifyContent:"space-around",flexDirection:"row-reverse",margintop:"-50px"}}>
          <tr style={{fontWeight:"bolder",fontSize:"20px",color:"#235f80",padding:"10px 20px"}}>
            <th>{stage.title}</th>
          
          </tr>
         <div> {stage.questions.map((question)=>(
         <tr style={{display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"space-between",margin:"5px"}}>
          <td style={{fontWeight:"bold"}}>{question.questionText}</td>
          <td style={{color:"gray"}}>{question.answer}</td>
         </tr>
         ))}</div>
         
         </table>
        ))}
        <h1 style={{marginTop:"50px",fontSize:"25px",fontWeight:"bolder"}}>هل تريد تحميل الملف الخاص باستشارتك؟؟</h1>
        <Button style={{cursor:"pointer",marginTop:"30px",color:"#235f80"}} className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => downloadFile(booking?.finalPdfFile)}>تحميل</Button>
        <Button style={{cursor:"pointer",marginTop:"30px",color:"#235f80"}} className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={closebutton}>انهاء مرحلةالتحكيم</Button>
        
        </div>
       
        <div  >
          <PopChat conversationId={booking?.conversationId}/>
        </div>        
      </>
    )}
                  {booking.bookingStatus === "inProgress" && (
              <>
              <div className="bg-gradient font-dmserifdisplay md:h-[271px] h-[272px] md:px-5 relative " style={{width:"100vw"}}>
                <div className=" bg-cover bg-no-repeat flex flex-col  items-end justify-center m-auto p-[85px] md:px-10 sm:px-5 w-full" style={{ backgroundImage: "url('images/img_div.png')" }}></div>
                <Text className="mb-8 absolute top-20 right-20 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700" size="txtDMSerifDisplayRegular50">{booking?.title}</Text>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}}>
                  <div className="aspect-w-16 aspect-h-9">
                  <iframe style={{margin:"50px 0px"}} className="w-[700px] h-[300px] md:w-[100%] sm:w-[100%]" src={`https://player.vimeo.com/video/${booking?.video}`} />
                </div>
                <FAQ questions={booking?.questions} onAnswersChange={setAnswers} /></div>
                
                <div className="flex justify-around w-full"><Button onClick={handleToggle} className="  my-[50px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      ارسال
    </Button>
    <Button onClick={handleTogglee} className="  my-[50px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
     انتقال
    </Button></div>
    <div
    ><PopChat conversationId={booking?.conversationId}/></div>
   </>
                  )}
                  {booking.bookingStatus === "design" && (
                    <div className="bg-gradient font-dmserifdisplay relative">
                      <div className="bg-cover bg-no-repeat p-[85px] md:px-10 sm:px-5 w-full" style={{ backgroundImage: "url('images/img_div.png')" }}></div>
                      <Text className="absolute top-20 right-20 text-white-A700">يمكنك محادثة المصمم</Text>
                      <Button style={{backgroundColor:"#aaa"}} onClick={closebuttonn}>انهاء مرحلةالتصميم</Button>
                      <PopChat conversationId={booking.conversationId} />
                    </div>
                  )}
                  {booking?.bookingStatus === "arbitrationPending" || booking?.status === "pending" && (
                      <div style={{backgroundColor:"#B4B4B3",width:"100vw"}} className="font-dmserifdisplay md:h-[371px] sm:h-[371px] h-[371px] md:px-5 relative w-full">
                      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                      
                     <h1 style={{color:"white", margin:"100px"}} className="text-[40px] sm:text-[20px]">يرجى الانتظار حتى يوافق المسؤول على طلبك</h1>
                  </div>
                  </div>
                  </div>
                  )}
                  {booking?.bookingStatus === "endArbitration" && (
        <div style={{backgroundColor:"#B4B4B3", width:"100vw"}} className=" md:h-[571px] sm:h-[371px] h-[450px] md:px-5 relative ">
         
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h1 style={{color:"white"}} className="text-[40px]  m-[70px_30px] sm:m-[40px_30px]">تهانيناً</h1>
              <h2 className="text-[30px] sm:text-[20px]" style={{color:"white", margin:"10px"}}>لقد اكملت التحكيم... يمكنك تحميل الملف الخاص باستشارتك</h2>
           <div style={{display:"flex",justifyContent:"space-around"}}>
           <Button style={{cursor:"pointer",margin:"10px"}} className="text-blue_gray-700_01 sm:text-[20px] h-[46px] justify-center mt-[10px] pb-[3px] pt-2 sm:px-5 px-[20px] rounded-[30px] text-xl md:text-[18px] bg-white-A700  " onClick={() => downloadFile(booking?.finalPdfFile)}>تحميل</Button>
            <Button style={{cursor:"pointer",margin:"10px"}} className="text-blue_gray-700_01 sm:text-[20px] h-[46px] justify-center mt-[10px] pb-[3px] pt-2 sm:px-5 px-[20px] rounded-[30px] text-xl md:text-[18px] bg-white-A700  " onClick={handleDes(paramId)}>الانتقال</Button>
             
           </div>
             </div>
          
        </div>
      )
    }
                  
                    {booking.bookingStatus === "endAdvisor" && (
      <div style={{backgroundColor:"#B4B4B3",width:"100vw"}} className="font-dmserifdisplay md:h-[571px] sm:h-[371px] h-[450px] md:px-5 relative w-full">
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{color:"white", margin:"10px"}} className="text-[40px] sm:text-[20px]">تهانيناً</h1>
            <h2 style={{color:"white", margin:"10px",fontSize:"30px"}}>لقد اكملت الاستشارة... يمكنك تحميل الملف الخاص باستشارتك</h2>
          </div>
          <Button style={{cursor:"pointer"}} className="text-blue_gray-700_01 h-[46px] justify-center mt-[10px] pb-[3px] pt-2 sm:px-5 px-[20px] rounded-[30px] text-xl md:text-[18px] bg-white-A700 sm:text-xl " onClick={() => downloadFile(booking?.finalPdfFile)}>تحميل</Button>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2 style={{color:"white", margin:"10px",fontSize:"30px"}} className="text-[40px] sm:text-[20px]">هل تريد تحكيما لاستشارتك؟؟</h2>
            <Button className='text-blue_gray-700_01' style={{color:"white", margin:"10px",padding:"10px 30px",color:"#000",backgroundColor:"#fff",borderRadius:"30px"}}><Link to={`/ChoosefromArbitrators/${paramId}`}>
                         نعم
                        </Link></Button>
            <Button className='text-blue_gray-700_01' onClick={handleNo} style={{color:"white", margin:"10px",padding:"10px 30px",color:"#000",backgroundColor:"#fff",borderRadius:"30px"}}>لا</Button>
          </div>
        </div>
      </div>
    )}
                  {booking.bookingStatus === "completed" && (
                    <div className="completed">
                      <h1>لقد انهيت جميع المراحل</h1>
                    </div>
                  )}
                </div>
              ) : (
                <p>لا توجد حجوزات متاحة</p>
              )
            )
          ) : (<div style={{ position: "relative" }} className="grid grid-cols-3 md:grid-cols-1 gap-5 max-w-[1109px] mt-[-50px] mx-auto md:px-5 w-full">
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
                <Link to={`/profile/${adv._id}/${paramId}`}>
                  <Button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    التفاصيل
                  </Button>
                </Link>
{    token &&         
<Button 
  onClick={() => handleToggl(adv._id)} 
  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
>
  اختيار
</Button>
}

                {openAdvisorId === adv._id && (
                  <div style={{ position: "absolute",backgroundColor:"#fff" }} className="mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    <ul>
                      <Link to={`/paymentBank/${adv._id}/${paramId}`}>
                      <li onClick={() => handleItemClick('Item 1')} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        الدفع عن طريق البنك
                      </li>
                      </Link>
                      <li onClick={() => handleroute(paramId)} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                      الدفع عن طريق البطاقة الائتمانية
                      </li>
                     
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>)}
        </div>
      </div>
    </>
  );
};

export default ChoosefromherePage;
