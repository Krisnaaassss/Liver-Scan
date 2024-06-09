import Lottie from "lottie-react";
import coding from "../LottieFiles/coding.json";
import home from "../LottieFiles/homeKedua.json";
import Tilt from "react-parallax-tilt";
import Dataset from "../Components/Dataset.js";
import TypeEffect from "./../Components/TypeEffect ";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>
            Selamat Datang di <b>LiverScan</b>
          </h1>
          <h1>
            Saya <b>KRISNA LUCIANO SIBURIAN</b>
          </h1>
          <TypeEffect />
        </div>

        <Lottie className="illustration" animationData={coding} loop={true} />
      </div>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Judul <b>Skripsi</b>
          </h1>
          <p className="AboutTextBody">
            OPTIMASI ALGORITMA K-NEAREST NEIGHBOR MENGGUNAKAN METODE SMOTE DAN
            PRINCIPAL COMPONENT ANALYSIS UNTUK PREDIKSI PENYAKIT LIVER
          </p>
        </div>
        <Tilt>
          <Lottie className="illustration" animationData={home} loop={true} />
        </Tilt>
      </div>
      <div className="DatasetPage">
        <h1 className="DatasetHeading">Dataset</h1>
        <Dataset />
      </div>
    </div>
  );
};

export default Home;
