import React, { useState } from "react";

const InputProject = function (props) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const addNameHandler = (event) => {
    setProjectName(event.target.value);
  };

  const addDescriptionHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const addProjectHandler = (event) => {
    event.preventDefault();
    props.onAddProject(projectName, description);
  };

  return (
    <div>
      <form onSubmit={addProjectHandler}>
        <label>Name</label>
        <input type="text" onChange={addNameHandler}></input>
        <label>Description</label>
        <input type="text" onChange={addDescriptionHandler}></input>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default InputProject;
