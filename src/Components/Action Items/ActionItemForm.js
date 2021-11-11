import React, { useState } from "react";
import classes from "./ActionItemForm.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import useFormControl from "../../hooks/form-control";

const ActionItem = (props) => {
  // const [content, setContent] = useState("");
  // const [name, setName] = useState("");
  // const [validName, setValidName] = useState(true);
  // const [validDesc, setValidDesc] = useState(true);

  const {
    value: name,
    contentHandler: nameChangeHandler,
    isValid: validName,
    onBlur: nameBlurHandler,

    formIsValid,
    setFormIsValid,
    reset: resetNameHandler,
  } = useFormControl();
  const {
    value: content,
    contentHandler: contentChangeHandler,
    isValid: validDesc,
    onBlur: descriptionBlurHandler,

    reset: resetDescriptionHandler,
  } = useFormControl();

  const submitHandler = (event) => {
    event.preventDefault();

    if (validName && validDesc) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
      return;
    }

    props.addAction(name, content);

    resetNameHandler();
    resetDescriptionHandler();
  };

  return (
    <div className={classes.formSection}>
      <form className={classes.formContainer} onSubmit={submitHandler}>
        <div className={classes.formContent}>
          <label>Related Project</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={name}
          />
          {!formIsValid && !validName && (
            <span className={classes.error}>
              <RiErrorWarningFill /> Name is required
            </span>
          )}
        </div>
        <div className={classes.formContent}>
          <label>Project Task</label>
          <textarea
            rows="3"
            cols="25"
            type="text"
            onChange={contentChangeHandler}
            onBlur={descriptionBlurHandler}
            value={content}
          />
          {!formIsValid && !validDesc && (
            <span className={classes.error}>
              <RiErrorWarningFill /> Description is required
            </span>
          )}
        </div>
        <button className={classes.submitBtn} type="submit">
          Submit <IoCheckmarkCircleOutline />
        </button>
      </form>
    </div>
  );
};

export default ActionItem;
