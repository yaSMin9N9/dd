import Header from 'components/Header'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function QuestionDesign() {
  const[openAdvisorId ,setOpenAdvisorId]= useState()
  const {id} =useParams()
    const navigate = useNavigate()
    const handleToggle = (advisorId) => {
      setOpenAdvisorId(advisorId === openAdvisorId ? null : advisorId);
    };
    const handleroute =(id) =>{
      navigate(`/choosePayment/${id}`)
    }

  const handleNo =() =>{
   navigate("/End")
  }
  return (
    <div className="bg-white-A700 flex flex-col font-abel sm:gap-10 md:gap-10 gap-[3593px] items-start justify-end mx-auto w-full">
    <div className="flex flex-col md:gap-10 gap-[97px] items-center w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <Header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[165px] py-8 w-full" />
        <div style={{backgroundColor:"#B4B4B3"}} className="  font-dmserifdisplay md:h-[271px] h-[272px] md:px-5 relative w-full">
        <div style={{display:"flex",flexDirection:"column",position:"absolute",right:"40px",top:"70px"}}> 
 <div><h1 style={{color:"white", margin:"10px"}} className=" text-[40px] sm:text-[20px]" > هل تريد تصميماً لاستشارتك؟؟</h1>
 </div>
 <div ><Button  onClick={handleToggle} style={{color:"#255f80", margin:"10px",padding:"10px 30px",backgroundColor:"#fff",borderRadius:"30px"}}>نعم</Button>
 {openAdvisorId && (
                    <div style={{ position: "absolute",backgroundColor:"#fff" }} className="mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                      <ul>
                        <Link to={`/paymentBank/${id}`}>
                        <li  className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          الدفع عن طريق البنك
                        </li>
                        </Link>
                        <li onClick={() => handleroute(id)}  className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        الدفع عن طريق البطاقة الائتمانية
                        </li>
                       
                      </ul>
                    </div>
                  )}
 <Button  onClick={handleNo} style={{color:"#255f80", margin:"10px",padding:"10px 30px",backgroundColor:"#fff",borderRadius:"30px"}}>لا</Button>
 
 </div>

</div>

  </div>
  </div>
  </div>
  </div>
  )
}

export default QuestionDesign