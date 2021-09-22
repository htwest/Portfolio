import styles from "../../styles/Projects/ProjectView.module.css";

const ProjectView = ({ project }) => {
  return (
    <div className={styles.container}>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p>{project.link}</p>
    </div>
  );
};

export default ProjectView;
