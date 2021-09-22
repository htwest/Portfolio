import CardHand from "../components/Projects/CardHand";

import styles from "../styles/Projects/Projects.module.css";

const Projects = ({ openNav }) => {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <CardHand />
    </div>
  );
};

export default Projects;
