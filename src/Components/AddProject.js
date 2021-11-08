import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import ActionItemForm from "./ActionItemForm";
import ActionItem from "./ActionItem";

const AddProject = function (props) {
  // const [actionItems, setActionItems] = useState([]);
  // const addActionHandler = (data) => {
  //   // console.log(data);
  //   setActionItems((prevItem) => {
  //     return [...prevItem, { id: data.id, content: data.content }];
  //   });
  //   console.log(actionItems);
  // };

  return (
    <div>
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
    </div>
  );
};

export default AddProject;
