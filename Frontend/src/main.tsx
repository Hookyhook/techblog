import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Helmet } from "react-helmet";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Techblog</title>
      <link rel="icon" type="image/svg" href="logo.svg"></link>
    </Helmet>
    <App />
  </React.StrictMode>
);
