import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: "https://firstaid.goodmorningaidbd.com/api/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: request interceptor for auth token
// axiosInstance.interceptors.request.use((config) => {
//   const token = Cookies.get("GM_T");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// ✅ Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const responseObject = {
      data: response?.data,
      status: response?.status,
      success: response?.data?.success,
    };
    return responseObject;
  },
  (error) => {
    const responseObject = {
      statusCode: error?.response?.status || 500,
      message: error?.response?.data || "Something went wrong",
      success: error?.response?.data?.success,
    };

    // Optional: redirect on unauthorized
    // if ([401, 403].includes(responseObject.statusCode)) {
    //   window.location.href = "/logout";
    // }

    return Promise.reject(responseObject);
  }
);

export default axiosInstance;
