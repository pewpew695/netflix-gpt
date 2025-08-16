import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";


console.log("Root element:", document.getElementById("root"));
createRoot(document.getElementById("root")).render(<App />);
