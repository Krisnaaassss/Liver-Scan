import React from "react";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    SMOTEDesc:
      "SMOTE pertama kali diperkenalkan oleh Chawla pada tahun 2002. Prinsip kerja SMOTE adalah dengan menambahkan data buatan ke kelas minoritas dengan melakukan interpolasi antara data asli yang ada. SMOTE adalah metode over-sampling di mana data minoritas diperbanyak dengan data sintetik yang diperoleh dari replikasi data minoritas",

    "Principal Component AnalysisDesc":
      "PCA adalah metode analisis multivariat yang didasarkan pada transformasi linear yang sering digunakan untuk mengurangi dimensi data, mengekstrak informasi penting dari data yang sangat besar, dan menganalisis struktur variabel",

    "K-Nearest NeighborDesc":
      "Evelyn dan Hodges pada tahun 1951 memperkenalkan  KNN pertama kali dan kemudian dikembangkan lebih lanjut oleh Cover dan Hart pada tahun 1967. KNN adalah algoritma supervised learning yang mengelompokkan data berdasarkan kedekatan antara satu data dengan yang lain dalam proses klasifikasi ",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3 className="projectTitle">{projectName}</h3>
        <br />
        <p className="projectDescription">{desc[projectName + "Desc"]}</p>
        <br />
      </div>
    </div>
  );
};

export default ProjectBox;
