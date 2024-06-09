import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import Styles from "./Styles";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { formatCreditCardNumber, formatExpirationDate, formatCVC } from "./cardUtils";
import Header from "components/Header";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "components";

axios.defaults.baseURL = "/api";
const token = localStorage.getItem("token2");
const Payment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [responseUrl, setResponseUrl] = useState(""); // State to store response URL
  const { search } = useLocation(); // Get URL search parameters
  const queryParams = new URLSearchParams(search);
  const status = queryParams.get("status"); // Extract status from URL

  useEffect(() => {
    console.log(status);
    if (status === "success") {
      toast.success("تم عملية الدفع بنجاح");
      navigate('/');
    }
    if (status === "failed") {
      // Handle failure status, navigate to failure page
      navigate('/failure');
    }
  }, [status]);

  const handlePayment = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/user/payment/mada/booking", {
        number: values.number,
        name: values.name,
        cvc: values.cvc,
        month: values.month,
        year: values.year,
        serviceId: id,
        advisorId: "66281365cda1df9295028211"
      }, {
        withCredentials: true,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      // Extract response URL from the response object
      const url = response.data.url;
      setResponseUrl(url); // Set the response URL in state
      window.open(url, "_self");
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <>
      <Header className="absolute flex flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[165px] py-8 top-[0] w-full" />
      <Styles style={{ marginTop: "100px" }}>
        <Form
          onSubmit={handlePayment}
          render={({ handleSubmit, form, submitting, pristine, values, active }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card
                  number={values.number || ""}
                  name={values.name || ""}
                  expiry={values.expiry || ""}
                  cvc={values.cvc || ""}
                  focused={active}
                />
                <div>
                  <Field
                    name="number"
                    component="input"
                    type="text"
                    placeholder="Card Number"
                  />
                </div>
                <div>
                  <Field
                    name="cvc"
                    component="input"
                    type="text"
                    placeholder="CVC"
                  />
                </div>
                <div>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name on Card"
                  />
                </div>
                <div>
                  <Field
                    name="month"
                    component="input"
                    type="text"
                    placeholder="month"
                  />
                  <Field
                    name="year"
                    component="input"
                    type="text"
                    placeholder="year"
                  />
                </div>
                <div className="buttons">
                  <Button style={{background:"#235f80",color:'white'}} className=" hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded shadow" disabled={submitting}>
                    Submit
                  </Button>
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
              </form>
            );
          }}
        />
      </Styles>
    </>
  );
};

export default Payment;
