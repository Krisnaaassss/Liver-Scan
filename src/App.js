import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./views/Navbar";
import Footer from "./views/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Pengujian from "./views/Pengujian";
import Project from "./views/Metode";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader
            color={"#9067C6"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav />
          <MoveToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Metode" element={<Project />} />
            <Route path="/Pengujian" element={<Pengujian />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
