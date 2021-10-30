import React from "react";
import ProjectItem from "./ProjectItem";
import style from "./AddProject.module.css";

const AddProject = function (props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          onDelete={props.onDeleteItem}
        >
          <h2>
            <strong>{project.name}</strong>
          </h2>
          <p>{project.description}</p>
        </ProjectItem>
      ))}
    </ul>
  );
};

export default AddProject;
