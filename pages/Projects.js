import { useState } from "react";

import CardHand from "../components/Projects/CardHand";
import ProjectView from "../components/Projects/ProjectView";

import styles from "../styles/Projects/Projects.module.css";

const Projects = ({ openNav }) => {
  const [project, setProject] = useState(null);

  const handleClick = () => {
    setProject(true);
  };

  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      {project ? <ProjectView /> : null}
      <CardHand handleClick={handleClick} />
    </div>
  );
};

export default Projects;
