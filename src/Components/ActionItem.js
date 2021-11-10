import React from "react";
import { BiTrash } from "react-icons/bi";
import style from "./ProjectItem.module.css";
const ActionItem = (props) => {
  const deleteHandler = () => props.onDeleteItem(props.id);
  return (
    <div>
      <h3>{props.project}</h3>
      <li>
        {props.tasks}
        <button onClick={deleteHandler}>
          <BiTrash className={style.icon} />
          Delete Item
        </button>
      </li>
    </div>
  );
};

export default ActionItem;
