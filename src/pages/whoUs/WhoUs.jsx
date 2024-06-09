import React from 'react'
import { Img, Text } from "components";
import Header from 'components/Header';
import Footer from 'components/Footer';
function WhoUs() {
  return (
    <div>
       <Header className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
         <div style={{marginTop:"300px"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Text
            className="mt-[1px] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-700_01 text-center"
            size="txtEricaOneRegular35"
          >
            من نحن
          </Text>
          <div className="bg-deep_orange-500  border-solid h-[11px] md:px-5 w-[10%]"></div>
          </div>
          <div>
          <h2
            className=" sm:text-[18px] sm:mr-[-20px] md:text-[22px] text-[25px] m-[5%] md:m-[2%] sm:m-[2%] text-gray-700 text-right w-[90%]  sm:w-full"
          
          >
            شركة دفة للتخطيط الاستراتيجي وصناعة السياسات من الشركات الرائدة في
            مهنة المحاماة بالمملكة العربية السعودية، وأحد الشركات المعتمدة لدى
            مكتب تحقيق الرؤية 2030 ، يتكون فريق العمل من نخبة متميزة من الكوادر
            المهنية من المحامون والمستشارون في معظم مجالات القانون، يقدم المكتب
            الخدمات القانونية بجودة عالية وأداء احترافي والتي تخدم الشركات
            الخاصة والقطاعات الحكومية حافظت الشركة على سجل ممتـاز في إنجاز
            الأعمال القانونية ضمن فريق عمل قانوني احترافي.
          </h2>
          </div>
          <div className="font-abel md:h-[1032px] h-[502px] sm:h-[559px] mt-[57px] md:px-5 relative w-full">
            <div className="bg-deep_orange-500 sm:hidden h-[502px] m-auto w-full"></div>
            <div className="absolute h-[502px] md:h-[975px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[502px] m-auto sm:hidden object-cover w-full"
                src="images/img_rectangle16.png"
                alt="rectangleSixteen"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[9%] w-[77%]">
                <Text
                  className="sm:text-[31px] sm:mt-60 md:text-[33px] text-[35px] text-blue_gray-700 text-center"
                  size="txtAbelRegular35"
                >
                  قيمنا
                </Text>
                <div className="bg-deep_orange-500 border border-solid h-[11px] mt-[13px] w-[13%]"></div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[116px] w-full">
                  <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-4 h-[163px] md:h-auto items-center justify-start p-8 sm:px-5 rounded-[20px] w-[255px]">
                  
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterRegular18"
                      style={{position:"rtl",textAlign:"right" }}
                    >
                      تطبيق أفضل الممارسات الدولية
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-4 h-[163px] md:h-auto items-center justify-start p-8 sm:px-5 rounded-[20px] w-[252px]">
                    
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterRegular18"
                      style={{position:"rtl",textAlign:"right" }}
                    >
                      الجودة الدائمة في العمل والأداء
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-4 h-[163px] md:h-auto items-center justify-start p-8 sm:px-5 rounded-[20px] w-[247px]">
                    
                    <Text
                      className="leading-[160.00%] text-gray-900 text-lg"
                      size="txtInterRegular18"
                      style={{position:"rtl",textAlign:"right" }}
                    >
                      <>
                        الالتزام بالمعايير العالية
                        <br />
                        ورعاية مصالح العملاء
                      </>
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col gap-4 h-[163px] md:h-auto items-center justify-start p-8 sm:px-5 rounded-[20px] w-[260px]">
                    
                    <Text
                      className="leading-[160.00%] text-gray-900 text-lg"
                      size="txtInterRegular18"
                      style={{position:"rtl",textAlign:"right" }}
                    >
                      <>
                        الشفافية والوضوح في التعامل
                        <br />
                        الصدق والأمانة مع العميل
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Text
            className="mt-[57px] sm:mt-[500px] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-700 text-center"
            size="txtAbelRegular35"
          >
            رسالتنا
          </Text>
          <div className="bg-deep_orange-500 border border-solid h-[11px] mt-3 md:px-5 w-[10%]"></div>
          </div>
          <div className="flex sm:flex-col flex-row font-abel md:gap-10 items-center justify-between max-w-[1101px] mt-[85px] mx-auto md:px-5 w-full">
            <Img
              className="h-[229px] md:h-auto object-cover rounded-[10px]"
              src="images/img_rectangle18.png"
              alt="rectangleEighteen"
            />
            <Text
              className="leading-[316.00%] text-gray-700 text-right text-xl"
              size="txtAbelRegular20"
            >
              رسالتنا هي تقديم خدمة قانونية عالية الجودة ومبتكرة وموجهة نحو
              تحقيق النتائج بشكل مستمر لعملائنا الكرام مما سيقدم لهم تجربة مثمرة
              مدى الحياة .لتزم بأعلى المعايير الأخلاقية والمهنية. إن التزامنا
              بالنزاهة والأخلاق يضمن حصول عملائنا على أفضل استشارات قانونية
              وتمثيل
            </Text>
          </div>
          </div>
<Footer/>
    </div>
  )
}

export default WhoUs