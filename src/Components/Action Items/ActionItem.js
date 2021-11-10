import React from "react";
import { BiTrash } from "react-icons/bi";
import style from "../Add Project/ProjectItem.module.css";
const ActionItem = (props) => {
  const deleteHandler = () => props.onDeleteItem(props.id);
  return (
    <div>
      <h3>{props.project}</h3>
      <li>
        <p>{props.tasks}</p>
        <button onClick={deleteHandler}>
          <BiTrash className={style.icon} />
        </button>
      </li>
    </div>
  );
};

export default ActionItem;
