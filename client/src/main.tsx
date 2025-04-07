import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { CourseProvider } from "./context/CourseContext";

createRoot(document.getElementById("root")!).render(
  <CourseProvider>
    <App />
  </CourseProvider>
);
