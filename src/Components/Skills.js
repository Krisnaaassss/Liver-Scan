import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaPython,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFlask } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    CSS: <FaCss3Alt />,
    HTML: <FaHtml5 />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Python: <FaPython />,
    Flask: <SiFlask />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
