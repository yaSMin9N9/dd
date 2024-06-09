import { Button, Input, Text } from 'components'
import React, { useState } from 'react'
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';
import toast from 'react-hot-toast';
function ConnectUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [formError, setFormError] = useState('');
  const[isloading,setIsloading]= useState(false)
    const handleSubmit = async (e) => {
      setIsloading(true)
      e.preventDefault();
      if (!name || !email || !comment) {
        setFormError('Please fill in all required fields.');
        return;
      }
      setFormError('');
      
      try {
       const res = await axios.post(
          'http://localhost:8000/user/contact',{name,email,subject,comment},{
            headers:{
              'Accept': 'application/json',
              
            }
          }
         
        );
        console.log(res);
        console.log(formError);
        toast.success("شكراً لك على ارسال الرسالة سيتم التواصل معك في اقرب فرصة")
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setSubject('');
        setComment('');
        setIsloading(false)
      } catch (error) {
        console.error('Error:', error);
        toast.error("حدث خطا ما يرجى اعادة المحاولة لاحقاً")
      }
    };
  return (
    <>
    <Header className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
    
    <div className="px-4 sm:px-6 lg:px-6 mt-60" >
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
     <Text
            className="mt-4 sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-700 text-center"
            size="txtAbelRegular35"
          >
            تواصل معنا
          </Text>
    <div className="bg-deep_orange-500 border border-solid h-[11px] mt-4 md:px-5 w-[10%]"></div>
       </div>
    <div className="mt-5 sm:mt-8" >
      <section className="contactusform-section"  >
        <div className="container" >
            <div >
              <div className="contactform-img"></div>
            </div>
            <div >
              <div className="contactus-form" style={{display:"flex", justifyContent:"center" ,alignItems:"center"}}>
                <form onSubmit={handleSubmit} >
                  <div className="form-group">
                    {formError && <p className="text-red-500">{formError}</p>}
                    <Input
                    name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-[600px] sm:w-[400px] leading-normal md:text-xl lg:text-2xl xl:text-3xl p-0 placeholder-blue_gray-500_8c text-left"
                      wrapClassName=" pl-3  sm:w-full"
                      color="blue_gray_500"
                      size="xs"
                      variant="underline"
                      placeholder="الاسم"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="الايميل"
                      className="mt-3 sm:mt-5 leading-normal md:text-xl lg:text-2xl xl:text-3xl p-0 placeholder-blue_gray-500_8c text-left w-full"
                      wrapClassName="pl-3 sm:w-full"
                      color="blue_gray_500"
                      size="xs"
                      variant="underline"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      placeholder="ما عنوان رسالتك"
                      className="mt-3 sm:mt-5 leading-normal md:text-xl lg:text-2xl xl:text-3xl p-0 placeholder-blue_gray-500_8c text-left w-full"
                      wrapClassName="pl-3  sm:w-full"
                      color="blue_gray_500"
                      size="xs"
                      variant="underline"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={4}
                      placeholder="اكتب رسالتك"
                      required
                      defaultValue={""}
                      className="mt-3 sm:mt-5 leading-normal md:text-xl lg:text-2xl xl:text-3xl p-0 placeholder-blue_gray-500_8c text-left w-full"
                      wrapClassName="pl-3  sm:w-full"
                      color="blue_gray_500"
                      size="xs"
                      variant="underline"
                    />
                  </div>
                  <div className="submit-section">
                
                  <Button style={{display:"flex",alignItems:"center"}} className="bg-blue_gray-700_01 h-[47px] justify-center mt-[45px] pb-[3px] pt-2 sm:px-5 px-[35px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl " size="txtIstokWebBold24"> 
                  { isloading && <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
        </path>
    </svg>}
    ارسال</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
      </section>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default ConnectUs