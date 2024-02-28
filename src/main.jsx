/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "./store";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <QuestionInsertPage /> */}
      {/* <CandidateInsertPage /> */}
      {/* <CandidateUpdate /> */}
      {/* <QuestionUpdate /> */}
    </Provider>
  </React.StrictMode>,
);
