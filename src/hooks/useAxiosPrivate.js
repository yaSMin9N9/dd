import axios from "axios";
import axiosPrivateInstance from "axios/axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useCurrentUserStore from "store/foruser";
const useAxiosPrivate = () => {
  const user = useCurrentUserStore((state) => state.user);
  const setUser = useCurrentUserStore((state) => state.setUser);
  useEffect(() => {
    const requestIntercept = axiosPrivateInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"] && user) {
          config.headers["Authorization"] = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivateInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (!error.response) {
          toast.error("حدث خطأ ما، يرجى التحقق من الاتصال بشبكة الانترنت");
        } else {
          if (error.response.status === 401) {
            if (!prevRequest?.sent) {
              prevRequest.sent = true;
              const data = await axios.get("http://localhost:8000/auth/refresh");
              prevRequest.headers[
                "Authorization"
              ] = `Bearer ${data.user.accessToken}`;
              setUser(data.user);
              return axiosPrivateInstance(prevRequest);
            }
          } else {
            toast.error("حدث خطأ ما، يرجى التحقق من الاتصال بشبكة الانترنت");
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivateInstance.interceptors.request.eject(requestIntercept);
      axiosPrivateInstance.interceptors.response.eject(responseIntercept);
    };
    
  }, [user]);

  return axiosPrivateInstance;
}
export default useAxiosPrivate
