import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/store";

axios.defaults.baseURL = "http://localhost:5000/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
        <ToastContainer />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
