import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomeV1 from "./pages/HomeV1";
import HomeV2 from "./pages/HomeV2";
import HomeV3 from "./pages/HomeV3";
import HomeV4 from "./pages/HomeV4";
import HomeV5 from "./pages/HomeV5";
import HomeV6 from "./pages/HomeV6";
import HomeV7 from "./pages/HomeV7";
import HomeV8 from "./pages/HomeV8";
import HomeV9 from "./pages/HomeV9";
import HomeV10 from "./pages/HomeV10";
import Activate from "./pages/Activate";
import Unlock from "./pages/Unlock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeV9 />} />
        <Route path="/activate" element={<Activate />} />
        <Route path="/unlock" element={<Unlock />} />
        
      </Routes>
    </HashRouter>
    </>
    
  );
}

export default App;
