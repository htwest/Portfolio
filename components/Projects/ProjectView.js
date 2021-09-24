import Link from "next/link";

import styles from "../../styles/Projects/ProjectView.module.css";

const ProjectView = ({ project }) => {
  const imgSrc = `./Projects/${project.title}.gif`;

  return (
    <div className={styles.container}>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <Link href={project.link}>
        <a className={styles.link}>Check It Out!</a>
      </Link>
    </div>
  );
};

export default ProjectView;
