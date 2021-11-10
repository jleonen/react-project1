import React, { useState } from "react";

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
    <div>
      <form onSubmit={submitHandler}>
        <label>Project</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
        <label>Action Item</label>
        <input type="text" onChange={itemChangeHandler} value={item} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActionItem;
