import { useState } from "react";

import CardHand from "../components/Projects/CardHand";
import ProjectView from "../components/Projects/ProjectView";

import styles from "../styles/Projects/Projects.module.css";

const Projects = ({ openNav }) => {
  const [project, setProject] = useState(null);

  const handleClick = (project) => {
    setProject(project);
  };

  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      {project ? <ProjectView project={project} /> : null}
      <CardHand handleClick={handleClick} />
    </div>
  );
};

export default Projects;
