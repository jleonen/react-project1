import React, { useState } from "react";
import classes from "./ActionItemForm.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ActionItem = (props) => {
  const [item, setItem] = useState("");
  const [name, setName] = useState("");

  const itemChangeHandler = (event) => {
    setItem(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.addAction(name, item);
    setItem("");
    setName("");
  };

  return (
    <div className={classes.formSection}>
      <form className={classes.formContainer} onSubmit={submitHandler}>
        <div className={classes.formContent}>
          <label>Related Project</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className={classes.formContent}>
          <label>Project Task</label>
          <textarea
            rows="3"
            cols="25"
            type="text"
            onChange={itemChangeHandler}
            value={item}
          />
        </div>
        <button className={classes.submitBtn} type="submit">
          Submit <IoCheckmarkCircleOutline />
        </button>
      </form>
    </div>
  );
};

export default ActionItem;
