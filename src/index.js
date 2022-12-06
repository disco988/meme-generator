import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

function Page() {
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
