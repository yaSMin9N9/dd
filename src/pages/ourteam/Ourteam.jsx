import { Img, List, Text } from 'components'
import React from 'react'

function Ourteam() {
  return (
    <div className="h-[648px] mt-[68px] relative w-[78%] md:w-full">
    <Text
      className="leading-[120.00%] mb-[-46px] mx-auto sm:text-[19px] md:text-[21px] text-[23px] text-right text-white-A700_02 w-full z-[1]"
      size="txtAbelRegular23"
    >
      تتكون الهيكلة الإدارية من محامين ومستشارين هم من ذوي
      الكفاءات والخبرة العالية في مجال معالجة القضايا والمعاملات.
      إن تكوين فريق عمل ناجح هو خطوة مهمة لتحقيق أهداف المشـروع
      ولا سيما أن يكون أعضاء فريق العمل يجمعون ما بين المهارات
      المهنية والقيادية، والتي تجعل العمل الجماعي متناغما في بيئة
      عمل احترافية وذلك من خلال التفاعل المستمر والتبادل المنتظم
      للمعلومات داخل الفريق الواحد وخلق المزيد من الأفكار والحلول
      للمشكلات القانونية
    </Text>
    <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
      <List
        className="sm:flex-col flex-row gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
        orientation="horizontal"
      >
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
          <Img
            className="h-[457px] md:h-auto object-cover w-full"
            src="images/img_financiallyind.png"
            alt="financiallyind"
          />
        </div>
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
          <Img
            className="h-[457px] md:h-auto object-cover w-full"
            src="images/img_elegantoldman.png"
            alt="elegantoldman"
          />
        </div>
        <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
          <Img
            className="h-[457px] md:h-auto object-cover w-full"
            src="images/img_portraitfemale.png"
            alt="portraitfemale"
          />
        </div>
      </List>
    </div>
  </div>
  )
}

export default Ourteam