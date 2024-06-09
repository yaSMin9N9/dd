
import React, { useEffect, useState } from "react";
import FAQ from "components/Accordion/FAQ";
import { Button } from "react-bootstrap";
import Header from "components/Header";

const ProfileOnePage = () => {
  const [profile, setProfile] = useState(null);
  const [answers, setAnswers] = useState({});
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJpZCI6IjY2MmVhMTc5NDdiN2ZiNDRkMjMwMGNkYSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTcxNDU2MjI1OCwiZXhwIjoxNzE0ODIxNDU4fQ.pXw01wE_cKwlTHtfvRuZGHWp_tdPfTe-BHSKUsxayiA"
  const handleToggle = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJpZCI6IjY2MmVhMTc5NDdiN2ZiNDRkMjMwMGNkYSIsInJvbGUiOiJ1c2VyIn0sImlhdCI6MTcxNDU2MjQ3OCwiZXhwIjoxNzE0ODIxNjc4fQ.Lh6JeiSGWpFcg2zsCSJQpq4SAbydQ1nhy34SouRsbTM");
    
    const raw = JSON.stringify({
      "questionId": "662e92f367e9e09f908c3763",
      "answer": "ojojojojoj"
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:8000/user/booking/answer", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        
        const response = await fetch("http://localhost:8000/user/booking/65ee0b3816651d0b973ea3dd", {
          method: "GET",
          headers: myHeaders,
        });

        const data = await response.json();
        console.log(data);
        
        setProfile(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <Header className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
      <div style={{marginTop:"200px",display:"flex",justifyContent:"end",alignItems:"end", flexDirection:"column"}}>
        <FAQ questions={profile?.questions}  onAnswersChange={setAnswers} />
        <Button onClick={handleToggle} className="p-4 mx-[170px] my-[50px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          ارسال
        </Button>
      </div>
    </>
  );
};

export default ProfileOnePage;
