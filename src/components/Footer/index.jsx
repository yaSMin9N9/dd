import { Img, List, Text } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{backgroundColor:"#235f80", marginTop:"100px"}} >
            
             <div id="footer-widgets" className="site footer-widgets">
              
                <div className="inside-footer-widgets  flex p-20 flex-row-reverse justify-around w-[100vw] sm:flex-col " >
                  <div className="footer-widget-1 grid-parent grid-33 tablet-grid-50 mobile-grid-100">
                    <aside id="nav_menu-4" className="widget inner-padding widget_nav_menu">
                      <h3 className="widget-title">روابط</h3>
                      <div  style={{display:"flex",alignItems:"end",flexDirection:"column",fontWeight:"bolder",direction:"rtl"}} 
                      className="footer-quick-links">
                        <ul ><li style={{color:"#fff"}}><Link to="/">الرئيسية</Link></li>
                        <li style={{color:"#fff"}}>
                          <Link to="/whous">من نحن</Link></li>
                            <li style={{color:"#fff"}}><Link to="/connectus">تواصل معنا</Link></li></ul></div></aside></div>
                        <div className="footer-widget-2 grid-parent grid-33 tablet-grid-50 mobile-grid-100">
                          <aside id="black-studio-tinymce-9" className="widget inner-padding widget_black_studio_tinymce">
                            <h3 className="widget-title">سوشيال ميديا</h3>
                            <div className="textwidget">
                              <div className="socical-icons" style={{display:"flex" , alignItems:"center", justifyContent:"space-between"}}>
              
              <a target="_blank" href="https://www.linkedin.com/company/hhs-lawyers/" aria-label="LinkedIn">
                <img data-lazyloaded={1} src="https://hhslawyers.com/wp-content/uploads/2020/08/linked-in.jpg.webp" width={50} height={50} title="LinkedIn" alt="LinkedIn" style={{width: 50}} data-src="https://hhslawyers.com/wp-content/uploads/2020/08/linked-in.jpg.webp" data-lazy-srcset="https://hhslawyers.com/wp-content/uploads/2020/08/linked-in.jpg.webp 50w" data-lazy-sizes="(max-width: 798px) 100vw, 798px" data-lazy-src-webp="https://hhslawyers.com/wp-content/uploads/2020/08/linked-in.jpg.webp" data-lazy-srcset-webp="https://hhslawyers.com/wp-content/uploads/2020/08/linked-in.jpg.webp 50w" data-ll-status="loaded" className="entered litespeed-loaded" />
              </a>
              
              <a target="_blank" href="https://www.youtube.com/@HHSLawyers" aria-label="LinkedIn">
                <img data-lazyloaded={1} src="https://farahatco.com/uploads/youtube2.png" width={50} height={50} title="Youtuble" alt="Youtuble" data-src="https://farahatco.com/uploads/youtube2.png" data-lazy-srcset="https://farahatco.com/uploads/youtube2.png 50w" data-lazy-sizes="(max-width: 798px) 100vw, 798px" data-lazy-src-webp="https://farahatco.com/uploads/youtube2.png" data-lazy-srcset-webp="https://farahatco.com/uploads/youtube2.png 50w" style={{width: 50, height: 47, border: '2px solid #dbdbdb'}} data-ll-status="loaded" className="entered litespeed-loaded" />
              </a></div></div></aside></div>
              <div className="footer-widget-3 "><aside id="black-studio-tinymce-10" className="widget inner-padding widget_black_studio_tinymce">
                <h3 className="widget-title">تواصل معنا</h3><div className="textwidget">
                  <div style={{display:"flex",alignItems:"end",flexDirection:"column"}}>
                  <strong style={{color:"white"}}>العنوان</strong><a style={{color:"#eee"}} href="https://www.google.com/maps/place/HHS+Lawyers+And+Legal+Consultants/@25.265408,55.321707,15z/data=!4m5!3m4!1s0x0:0x2374c76fc3a0b66b!8m2!3d25.265408!4d55.321707?hl=ar">الرياض - حي اليرموك</a>
              <strong style={{color:"white"}}>الواتساب والموبايل</strong> <a style={{color:"#eee"}} className="js-contact" href="https://api.whatsapp.com/send?phone=971521782364&text=.مرحباً أتش أتش أس للمحامين أريد الاستفادة من خدماتك يرجى الاتصال بي">1782364 52 971+</a>
              <strong style={{color:"white"}}>الهاتف الأرضي</strong> <a style={{color:"#eee"}} className="js-contact" href="tel:+97142555496" rel="nofollow">2555496 4 971+</a>
             
                  </div>
               </div></aside></div></div></div>
              </div>
  

       
  )
}

export default Footer