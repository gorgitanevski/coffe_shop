import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es";
import { store } from "./apis";
import App from "./App";
import { Coffes } from "./context/coffeContext";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Coffes>
        <App />
      </Coffes>
    </BrowserRouter>
  </Provider>
);
