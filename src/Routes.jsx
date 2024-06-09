import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Verify from "pages/Verify";
import NotFound from "pages/NotFound";
import HomepagePage from "pages/Homepage";
import WhoUs from "pages/whoUs/WhoUs";
import Header from "components/Header";
import Register from "pages/Register";
import ConnectUs from "pages/ConnectUs";
import ForgotPassword from "pages/ForgetPass";
import PaymentBank from "pages/paymentbank";
import End from "pages/End"
import Payment from "../src/pages/payment/Payment"
import ChoosePayment from "pages/choosePayment";
import QuestionDesign from "pages/QuestionDesign";
import FailurePage from "components/FailurePage";
import PaymentBankDe from "pages/paymentbank/paymentbankDe"
import ChoosefromArbitrators from "pages/ChoosefromArbitrators";
import ProfileAr from "pages/Profile/ProfileAr";
import PaymentBankAr from "pages/paymentbank/paymentbankAr";
const Login = React.lazy(() => import("pages/Login"));
const ProfileOne = React.lazy(() => import("pages/ProfileOne"));
const Profile = React.lazy(() => import("pages/Profile"));
const Choosefromhere = React.lazy(() => import("pages/Choosefromhere"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
      
        <Routes>
          <Route path="/" element={<HomepagePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/whous" element={<WhoUs />} />
          <Route path="/choosefromhere/:_id" element={<Choosefromhere />} />
          <Route path="/ChoosefromArbitrators/:_id" element={<ChoosefromArbitrators />} />
          <Route path="/profile/:aid/:bid" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileAr />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/connectus" element={<ConnectUs/>}/>
          <Route path="/question/:id" element={<ProfileOne />}/>
          <Route path="/payment/:id" element={<Payment/>}/>
          <Route path="/forgotpass" element={<ForgotPassword />}/>
          <Route path="/choosePayment/:id" element={<ChoosePayment />}/>
          <Route path="/QuestionDesign/:id" element={<QuestionDesign />}/>
          <Route path="/failure" element={<FailurePage/>}/>
          <Route path="/End" element={<End/>}/>
          <Route path="/paymentBank/:advId/:paramId" element={<PaymentBank/>}/>
          <Route path="/paymentBank/:id" element={<PaymentBankDe/>}/>
          <Route path="/paymentBankAr/:arId/:paramId" element={<PaymentBankAr/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
