const ProjectView = ({ project }) => {
  return (
    <div>
      <div>
        <p>Title: {project.title}</p>
        <p>Sumary: {project.summary}</p>
        <p>Link: {project.link}</p>
      </div>
    </div>
  );
};

export default ProjectView;
