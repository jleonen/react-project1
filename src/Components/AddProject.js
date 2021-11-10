import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
// import ActionItemForm from "./ActionItemForm";
// import ActionItem from "./ActionItem";
// import AddActionItem from "./AddActionItem";

const AddProject = function (props) {
  // const [actionItems, setActionItems] = useState([]);
  // const addActionHandler = (data) => {
  //   setActionItems((prevItem) => {
  //     return [...prevItem, { id: Math.random().toString(), content: data }];
  //   });
  //   console.log(actionItems);
  // };

  // const deleteActionItem = (actionID) => {
  //   setActionItems((prevActions) => {
  //     const updatedActionItems = prevActions.filter(
  //       (project) => project.id !== actionID
  //     );

  //     return updatedActionItems;
  //   });
  // };

  return (
    <div>
      <ul>
        {props.projects.map((project) => (
          <div>
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
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AddProject;
