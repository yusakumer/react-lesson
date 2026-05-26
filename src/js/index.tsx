import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import "../css/main.css";
import { App } from "./App";
import { AuthProvider } from "./contexts/AuthContext";

// const todoItem = "掃除洗濯";

// const handleClick = () => {
//   alert("hi");
// };

// const element = (
//   <div>
//     <p>reactの学習</p>
//     <p>{todoItem}</p>
//     <button onClick={handleClick}>button</button>
//   </div>
// );

// Render your React component instead
const root = createRoot(document.getElementById("app")!);
// root.render(element);
root.render(
  <ChakraProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>,
);
