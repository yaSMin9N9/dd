import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "components";
import { Link, useSearchParams } from "react-router-dom";
import useCurrentUserStore from "store/foruser";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = (props) => {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setUser = useCurrentUserStore((state) => state.setUser);
  const user = useCurrentUserStore((state) => state.user);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (searchParams.has("token")) {
      localStorage.setItem("token2", searchParams.get("token"));
      setIsLoggedIn(true);
      searchParams.delete("token");
      setSearchParams(searchParams);
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("token2") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/user/auth/logout");
      localStorage.removeItem("token2");
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <header className={`${props.className} header`}>
        <div className="flex flex-row items-center justify-between w-full">
          <div >
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="!text-blue_gray-900  cursor-pointer font-abel min-w-[96px] rounded-[24px] text-center text-[12px]"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                تسجيل خروج
              </Button>
            ) : (
              <div style={{ display: "flex" }}>
                <Button
                  className="!text-blue_gray-900 cursor-pointer font-abel rounded-[24px] text-center text-[10px]"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                  style={{ margin: "5px" }}
                >
                  <Link to="/login">تسجيل الدخول</Link>
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  className="!text-gray-200 cursor-pointer font-abel rounded-[24px] text-center text-[12px]"
                  color="blue_gray_700"
                  size="xs"
                  variant="fill"
                >
                  <Link to="/register">انشاء حساب</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="menu-icon md:invisible sm:visible" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className="sm:hidden  flex flex-row">
         
         <li style={{margin:"20px 50px"}}>
           <Link to="/connectus" className="text-gray-900_7f sm:text-sm text-md" size="txtAbelRegular14">
             اتصل بنا
           </Link>
         </li>
         <li style={{margin:"20px 50px"}}>
           <Link to="/whous" className="text-gray-900_7f sm:text-sm text-md" size="txtAbelRegular14">
             من نحن
           </Link>
         </li>
         <li style={{margin:"20px 50px"}}>
           <Link to="/" className="text-gray-900_7f sm:text-sm text-md" size="txtAbelRegular14">
             الرئيسية
           </Link>
         </li>
       </ul>
          {menuOpen && (
            <div className="popup-menu">
            <ul className="popup-menu-list">
         
            <li style={{margin:"20px 50px"}}>
              <Link to="/connectus" className="text-gray-900_7f sm:text-sm text-md" size="txtAbelRegular14">
                اتصل بنا
              </Link>
            </li>
            <li style={{margin:"20px 50px"}}>
              <Link to="/whous" className="text-gray-900_7f sm:text-sm text-md" size="txtAbelRegular14">
                من نحن
              </Link>
            </li>
            <li style={{margin:"20px 50px"}}>
              <Link to="/" className="text-gray-900_7f sm:text-sm text-md" size="txtAbelRegular14">
                الرئيسية
              </Link>
            </li>
          </ul>
        </div>
          )}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
