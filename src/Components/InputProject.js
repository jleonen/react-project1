import React, { useState } from "react";
import style from "./InputProject.module.css";
import { RiErrorWarningFill, RiAddCircleFill } from "react-icons/ri";
// import { RiAddCircleFill } from "react-icons/ri";

const InputProject = function (props) {
  const [projectNames, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [validName, setValidName] = useState(true);
  const [validDesc, setValidDesc] = useState(true);

  const addNameHandler = (event) => {
    event.target.value.trim().length > 0 && setValidName(true);

    setProjectName(event.target.value);
  };

  const addDescriptionHandler = (event) => {
    event.target.value.trim().length > 0 && setValidDesc(true);

    setDescription(event.target.value);
  };

  const addProjectHandler = (event) => {
    event.preventDefault();

    projectNames.trim().length === 0 && setValidName(false);

    description.trim().length === 0 && setValidDesc(false);

    projectNames.trim().length > 0 &&
      description.trim().length > 0 &&
      props.onAddProject(projectNames, description);
    setProjectName("");
    setDescription("");
  };

  return (
    <div className={style.infoContainer}>
      <form className={style.formContainer} onSubmit={addProjectHandler}>
        <label>
          <strong>Enter the name of your project.</strong>
        </label>
        <div className={style.inputContainer}>
          <input
            type="text"
            value={projectNames}
            onChange={addNameHandler}
          ></input>
          <span className={validName ? style.hidden : style.error}>
            <RiErrorWarningFill /> Name is required
          </span>
        </div>

        <label>
          <strong>Description of project</strong>
        </label>
        <div className={style.inputContainer}>
          <input
            type="text"
            className={style.description}
            value={description}
            onChange={addDescriptionHandler}
          ></input>
          <span className={validDesc ? style.hidden : style.error}>
            <RiErrorWarningFill /> Description is required
          </span>
        </div>
        <div className={style.buttonSection}>
          <RiAddCircleFill className={style.buttonIcon} />
          <button type="submit">
            <strong>Add Project</strong>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputProject;
