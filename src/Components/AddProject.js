import React from "react";
import ProjectItem from "./ProjectItem";

const AddProject = function (props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          onDelete={props.onDeleteItem}
        >
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </ProjectItem>
      ))}
    </ul>
  );
};

export default AddProject;
