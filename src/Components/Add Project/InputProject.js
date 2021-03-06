import React, { useState } from "react";
import style from "./InputProject.module.css";
import { RiErrorWarningFill, RiAddCircleFill } from "react-icons/ri";
import useFormControl from "../../hooks/form-control";
import Button from "../UI/Button";

const InputProject = function (props) {
  // const [projectNames, setProjectName] = useState("");
  // const [description, setDescription] = useState("");
  // const [validName, setValidName] = useState(true);
  // const [validDesc, setValidDesc] = useState(true);

  const {
    value: projectNames,
    contentHandler: addNameHandler,
    isValid: validName,
    onBlur: nameBlurHandler,
    reset: resetNameHandler,
    formIsValid,
    setFormIsValid,
  } = useFormControl();
  const {
    value: description,
    contentHandler: addDescriptionHandler,
    isValid: validDesc,

    onBlur: descriptionBlurHandler,

    reset: resetDescriptionHandler,
  } = useFormControl();

  const addProjectHandler = (event) => {
    event.preventDefault();

    if (validName && validDesc) {
      setFormIsValid(true);
    } else {
      console.log(formIsValid);
      setFormIsValid(false);
      return;
    }

    props.onAddProject(projectNames, description);
    resetNameHandler();
    resetDescriptionHandler();
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
            onBlur={nameBlurHandler}
          ></input>
          {formIsValid === false && !validName && (
            <span className={style.error}>
              <RiErrorWarningFill /> Name is required
            </span>
          )}
        </div>

        <label>
          <strong>Description of project</strong>
        </label>
        <div className={style.inputContainer}>
          <textarea
            rows="15"
            cols="80"
            type="text"
            className={style.description}
            value={description}
            onChange={addDescriptionHandler}
            onBlur={descriptionBlurHandler}
          ></textarea>
          {!formIsValid && !validDesc && (
            <span className={style.error}>
              <RiErrorWarningFill /> Description is required
            </span>
          )}
        </div>
        {/* <div className={style.buttonSection}>
          <button type="submit">
            <RiAddCircleFill className={style.buttonIcon} />
            <span>Add Project</span>
          </button>
        </div> */}
        <Button type="submit">
          <span>Add Project</span>
        </Button>
      </form>
    </div>
  );
};

export default InputProject;
