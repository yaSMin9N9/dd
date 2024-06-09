
import React, { useEffect, useState } from "react";
import FAQ from "components/Accordion/FAQ";
import { Button } from "react-bootstrap";
import Header from "components/Header";
import { Text } from "components";
import PopChat from "components/chat";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import { downloadFile } from "components/downloadFile/downloadFile";
import { useFetchBooking, useFetchServices } from "components/hooks/useEffect";
import { BounceLoader } from "react-spinners";
const ProfileOnePage = () => {
  const {id} = useParams();
  const [book, setBook]= useState([])
  const [advisors, setAdvisors] = useState([]);
  const [profile, setProfile] = useState(null);
  const [answers, setAnswers] = useState({});
  const [booking, setBooking] = useState([]);
  const[isloading,setIsloading]= useState("")
  const token = localStorage.getItem("token2")
  const navigate = useNavigate()
  const handleNo =() =>{
   navigate("/QuestionDesign")
  }

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/booking`, {
          headers:{
            "Authorization": `Bearer ${token}`
          }
        });
        
        const data = response.data;
        setBook(data);
        console.log(book);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error(error.message)
      }
    };
    fetchBooking();
  }, []);
  
console.log(booking.bookingId);
  const handleToggle = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);
      
     await fetch("http://localhost:8000/user/booking/answer", {
        method: "POST",
        headers:myHeaders,
        body: JSON.stringify({answers}),
        
      });
      setAnswers("")
      toast.success("تم ارسال اجابتك بنجاح")
      console.log({answers});
      // Handle response from the server if needed
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  const handleButton = (id) =>{
   navigate(`/ChoosefromArbitrators/${id}`)
  }
  const param = useParams();
  useEffect(() => {
  const fetchBooking = async () => {
    setIsloading(true)
    try {
      const response = await axios.get(`http://localhost:8000/user/booking/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setBooking(data);
      setIsloading(false)
     console.log( data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  fetchBooking();
  }, []);
  console.log(booking); // use the custom hook for fetching booking
  useFetchServices(setAdvisors,param.id, token);
  console.log( booking);
  
  const handleTogglee = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      await axios.post('http://localhost:8000/user/booking/skip', {
        serviceId: id
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      toast.success("تم الانتقال للمرحلة التالية بنجاح")
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const closebutton =async () =>{
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      await axios.post('http://localhost:8000/user/booking/arbitration/close', {
        bookingId: booking.bookingId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  const closebuttonn =async () =>{
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");
      await axios.post('http://localhost:8000/user/booking/design/close', {
        bookingId: booking.bookingId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
    
      const fetchBooking = async () => {
        setIsloading(true)
        try {
          const response = await axios.get(`http://localhost:8000/user/booking/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          const data = response.data;
          setBooking(data);
          setIsloading(false)
         console.log( data);
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      };
    
      fetchBooking();
      navigate("/End")
  }
  
  return (
    <>
          {isloading ? (<BounceLoader color="#dd7048" style={{position:"absolute",top:"50%", right:"50%"}}/>): (
         <> <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
            {booking ?
  (< div>
    {booking?.bookingStatus === "arbitration" && (
      <>
          
          {/* <Text style={{color:"#235f80" ,margin:"50px"}} className="mb-8 absolute top-20 right-20 sm:text-[40px] md:text-[46px] text-[30px]" size="txtDMSerifDisplayRegular50">:عرض المراحل</Text>
           */}
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px"}}>
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
               {booking?.bookingStatus === "inProgress" && (
              <>
                <div className="bg-gradient font-dmserifdisplay md:h-[271px] h-[272px] md:px-5 relative w-full">
                  <div className=" bg-cover bg-no-repeat flex flex-col  items-end justify-center m-auto p-[85px] md:px-10 sm:px-5 w-full" style={{ backgroundImage: "url('images/img_div.png')" }}></div>
                  <Text className="mb-8 absolute top-20 right-20 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700" size="txtDMSerifDisplayRegular50">{booking?.title}</Text>
                  </div>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}}>
                    <div className="aspect-w-16 aspect-h-9">
                    <iframe style={{margin:"20px"}} width={700} height={300} src={`https://player.vimeo.com/video/${booking?.video}`} />
                  </div>
                  <FAQ questions={booking?.questions} onAnswersChange={setAnswers} /></div>
                  
                  <div className="flex justify-around w-full"><Button onClick={handleToggle} className="  my-[50px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        ارسال
      </Button>
      <Button onClick={handleTogglee} className="  my-[50px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
       تخطي
      </Button></div>
      <div 
      ><PopChat conversationId={booking?.conversationId}/></div>
     </>
)}
  {booking?.bookingStatus === "design" && (
              <>
                <div className="bg-gradient font-dmserifdisplay md:h-[271px] h-[272px] md:px-5 relative w-full">
                  <div className=" bg-cover bg-no-repeat flex flex-col  items-end justify-center m-auto p-[85px] md:px-10 sm:px-5 w-full" style={{ backgroundImage: "url('images/img_div.png')" }}></div>
                  <Text className="mb-8 absolute top-20 right-20 sm:text-[20px] md:text-[46px] text-[40px] text-white-A700" size="txtDMSerifDisplayRegular50">?هل تريد تحميل الملف الخاص باستشارتك</Text>
                 <div className="absolute right-20 top-40 ">
                  <Button style={{cursor:"pointer",marginTop:"30px",color:"#235f80", backgroundColor:"#fff"}} className="font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-10" onClick={closebuttonn}>انهاء مرحلةالتصميم</Button>
                  <Button style={{cursor:"pointer",marginTop:"30px",color:"#235f80", backgroundColor:"#fff"}} className="  font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-10" onClick={() => downloadFile(booking?.finalPdfFile)}>تحميل</Button>
                  </div>
      <PopChat conversationId={booking?.conversationId} style={{position:"absolute", top:"100px",left:"100px"}}/></div>
     </>
)}
    {book?.status === "pending"|| booking?.bookingStatus === "arbitrationPending" ||
    booking?.bookingStatus === "designPending" && (
       <div style={{backgroundColor:"#B4B4B3"}} className="font-dmserifdisplay md:h-[371px] sm:h-[371px] h-[371px] md:px-5 relative w-full">
       <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
       
      <h1 style={{color:"white", margin:"100px"}} className="text-[40px] sm:text-[20px]">يرجى الانتظار حتى يوافق المسؤول على طلبك</h1>
   </div>
   </div>
   </div>
    )}
    {
      booking?.bookingStatus === "endArbitration"&& (
        <div style={{backgroundColor:"#B4B4B3",width:"100vw"}} className="font-dmserifdisplay md:h-[571px] sm:h-[371px] h-[450px] md:px-5 relative">
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <h1 style={{color:"white", margin:"10px"}} className="text-[40px] sm:text-[20px]">تهانيناً</h1>
              <h2 style={{color:"white", margin:"10px",fontSize:"30px"}}>لقد اكملت الاستشارة... يمكنك تحميل الملف الخاص باستشارتك</h2>
            </div>
            <Button style={{cursor:"pointer"}} className="text-blue_gray-700_01 h-[46px] justify-center mt-[10px] pb-[3px] pt-2 sm:px-5 px-[20px] rounded-[30px] text-xl md:text-[18px] bg-white-A700 sm:text-xl " onClick={() => downloadFile(booking?.finalPdfFile)}>تحميل</Button>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h2 style={{color:"white", margin:"10px",fontSize:"30px"}} className="text-[40px] sm:text-[20px]">هل تريد تحكيما لاستشارتك؟؟</h2>
              <Button className='text-blue_gray-700_01' onClick={handleButton(id)} style={{color:"white", margin:"10px",padding:"10px 30px",color:"#000",backgroundColor:"#fff",borderRadius:"30px"}}>نعم</Button>
              <Button className='text-blue_gray-700_01' onClick={handleNo} style={{color:"white", margin:"10px",padding:"10px 30px",color:"#000",backgroundColor:"#fff",borderRadius:"30px"}}>لا</Button>
            </div>
          </div>
        </div>
      )
    }
    {booking.bookingStatus === "endAdvisor" && (
      <div style={{backgroundColor:"#B4B4B3"}} className="font-dmserifdisplay md:h-[571px] sm:h-[371px] h-[450px] md:px-5 relative w-full">
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{color:"white", margin:"10px"}} className="text-[40px] sm:text-[20px]">تهانيناً</h1>
            <h2 style={{color:"white", margin:"10px",fontSize:"30px"}}>لقد اكملت الاستشارة... يمكنك تحميل الملف الخاص باستشارتك</h2>
          </div>
          <Button style={{cursor:"pointer"}} className="text-blue_gray-700_01 h-[46px] justify-center mt-[10px] pb-[3px] pt-2 sm:px-5 px-[20px] rounded-[30px] text-xl md:text-[18px] bg-white-A700 sm:text-xl " onClick={() => downloadFile(booking?.finalPdfFile)}>تحميل</Button>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2 style={{color:"white", margin:"10px",fontSize:"30px"}} className="text-[40px] sm:text-[20px]">هل تريد تحكيما لاستشارتك؟؟</h2>
            <Button className='text-blue_gray-700_01' onClick={handleButton(id)} style={{color:"white", margin:"10px",padding:"10px 30px",color:"#000",backgroundColor:"#fff",borderRadius:"30px"}}>نعم</Button>
            <Button className='text-blue_gray-700_01' onClick={handleNo} style={{color:"white", margin:"10px",padding:"10px 30px",color:"#000",backgroundColor:"#fff",borderRadius:"30px"}}>لا</Button>
          </div>
        </div>
      </div>
    )}
  </div>):(<p>loading</p>)

}
 </>
      )
           }
    </>
  );
};

export default ProfileOnePage;
