import { createRoot } from "react-dom/client";
import Navbar from "/src/components/Navbar.jsx";

const root = createRoot(document.getElementById("header"));

root.render(
  <>
    <Navbar />
  </>
)