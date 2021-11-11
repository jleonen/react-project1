import React, { useState } from "react";
import classes from "./ActionItemForm.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiErrorWarningFill } from "react-icons/ri";
import useFormControl from "../../hooks/form-control";

const validation = (value) => value.trim().length > 0;
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
    error: nameError,
    reset: resetNameHandler,
  } = useFormControl(validation);
  const {
    value: content,
    contentHandler: contentChangeHandler,
    isValid: validDesc,
    onBlur: descriptionBlurHandler,
    error: descriptionError,
    reset: resetDescriptionHandler,
  } = useFormControl(validation);

  // const contentChangeHandler = (event) => {
  //   event.target.value.trim().length > 0 && setValidDesc(true);
  //   setContent(event.target.value);
  // };
  // const nameChangeHandler = (event) => {
  //   event.target.value.trim().length > 0 && setValidName(true);
  //   setName(event.target.value);
  // };

  let formIsValid = false;
  if (validName && validDesc) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // content.trim().length === 0 && setValidDesc(false);
    // name.trim().length === 0 && setValidName(false);

    if (!formIsValid) {
      return;
    }

    // content.trim().length > 0 &&
    //   name.trim().length > 0 &&
    props.addAction(name, content);
    // setContent("");
    // setName("");
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
          <span className={validName ? classes.hidden : classes.error}>
            <RiErrorWarningFill /> Name is required
          </span>
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
          <span className={validDesc ? classes.hidden : classes.error}>
            <RiErrorWarningFill /> Description is required
          </span>
        </div>
        <button className={classes.submitBtn} type="submit">
          Submit <IoCheckmarkCircleOutline />
        </button>
      </form>
    </div>
  );
};

export default ActionItem;
