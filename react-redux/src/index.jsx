import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles-invoice.css";
import App from "./App";


const domNode = document.getElementById("application-content");
const root = createRoot(domNode);
root.render(<App/>);
