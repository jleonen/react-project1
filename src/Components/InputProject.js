import React, { useState } from "react";
import style from "./InputProject.module.css";

const InputProject = function (props) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [validName, setValidName] = useState(true);
  const [validDesc, setValidDesc] = useState(true);

  const addNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValidName(true);
    }

    setProjectName(event.target.value);
  };

  const addDescriptionHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValidDesc(true);
    }

    setDescription(event.target.value);
  };

  const addProjectHandler = (event) => {
    event.preventDefault();

    if (projectName.trim().length === 0) {
      setValidName(false);
    }

    if (description.trim().length === 0) {
      setValidDesc(false);
    }

    !validName && !validDesc && props.onAddProject(projectName, description);
    setProjectName("");
    setDescription("");
  };

  return (
    <div>
      <form className={style.formContainer} onSubmit={addProjectHandler}>
        <label>Name</label>
        <div className={style.inputContainer}>
          <input
            type="text"
            value={projectName}
            onChange={addNameHandler}
          ></input>
          <span className={validName ? style.hidden : style.error}>
            Name is required
          </span>
        </div>

        <label>Description</label>
        <div className={style.inputContainer}>
          <input
            type="text"
            value={description}
            onChange={addDescriptionHandler}
          ></input>
          <span className={validDesc ? style.hidden : style.error}>
            Description is required
          </span>
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default InputProject;
