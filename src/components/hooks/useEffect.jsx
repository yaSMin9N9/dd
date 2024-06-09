import { useEffect } from "react";
import axios from "axios";

export const useFetchBooking = (setBooking, token,id, setIsloading) => {
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
  }, [setBooking, token]);
};

export const useFetchServices = (setAdvisors, param, token) => {
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/services/getAdvisors/${param}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = response.data;
        setAdvisors(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [setAdvisors, param._id, token]);
};
