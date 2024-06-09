import React from "react";
import Skills from "../Components/Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import sakit from "../LottieFiles/sakit.json";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Penyakit <b>Liver</b>
          </h1>
          <p className="textLiver">
            Penyakit Liver adalah peradangan hati yang disebabkan oleh infeksi
            virus, bakteri, atau bahan beracun sehingga hati tidak dapat
            melakukan fungsinya dengan baik. Penyakit liver yang sering dianggap
            sebagai pembunuh diam-diam karena gejalanya yang tidak selalu
            terlihat, merupakan salah satu penyumbang tinggi kematian di
            Indonesia. Menurut World Health Organization (WHO) pada tahun 2013,
            jumlah penderita penyakit liver di Indonesia mencapai 28 juta orang.
            Penyakit liver merupakan salah satu dari 10 penyakit terbesar yang
            menyebabkan tingkat kematian yang tinggi di negara indonesia
          </p>
        </div>
        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={sakit}
              loop={true}
            />
          </Tilt>
        </div>
      </div>
      <h1 className="SkillsHeading">Teknologi Yang Digunakan</h1>
      <div className="skills">
        <Skills skill="CSS" />
        <Skills skill="HTML" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        {/* <Skills skill="Node" /> */}
        <Skills skill="Python" />
        <Skills skill="Flask" />
        <Skills skill="Git" />
        <Skills skill="Github" />
      </div>
    </>
  );
};

export default About;
