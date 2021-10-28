import React from "react";
import ProjectItem from "./ProjectItem";

const AddProject = function (props) {
  return (
    <ul>
      {props.projects.map((project) => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default AddProject;
