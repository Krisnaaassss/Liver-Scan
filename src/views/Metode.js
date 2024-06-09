import React from "react";
import ProjectBox from "../Components/ProjectBox";
import knn from "../images/knn.png";
import smote from "../images/smote.png";
import pca from "../images/pca.png";
const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        <b className="judulmetode">METODE </b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={knn} projectName="K-Nearest Neighbor" />
        <ProjectBox projectPhoto={smote} projectName="SMOTE" />
        <ProjectBox
          projectPhoto={pca}
          projectName="Principal Component Analysis"
        />
      </div>
    </div>
  );
};

export default Projects;
