import React from "react";
import "./styles/color.css";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import Footer from "components/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "components/Header";
const queryClient = new QueryClient();
const isLoginPage = () => {
  const currentPath = window.location.pathname;
  return currentPath === "/login" || currentPath === "/register";
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position="top-right"/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
