import React, { useState } from "react";

const ActionItem = (props) => {
  const [item, setItem] = useState("");

  const itemChangeHandler = (event) => {
    setItem(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.addAction(item);
    setItem("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Action Item</label>
        <input type="text" onChange={itemChangeHandler} value={item} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActionItem;
