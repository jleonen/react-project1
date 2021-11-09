import React from "react";
import { BiTrash } from "react-icons/bi";
import style from "./ProjectItem.module.css";
const ActionItem = (props) => {
  const deleteHandler = () => props.onDeleteItem(props.id);
  return (
    <li>
      {props.tasks}
      <button onClick={deleteHandler}>
        <BiTrash className={style.icon} />
        Delete Project
      </button>
    </li>
  );
};

export default ActionItem;
