import React from "react";
import { BiTrash } from "react-icons/bi";
import style from "../Add Project/ProjectItem.module.css";
const ActionItem = (props) => {
  const deleteHandler = (event) => props.onDeleteItem(props.id, event);
  const deleteAll = () => props.onDeleteAll(props.id);
  const completedProject = (event) => {
    event.target.classList.toggle(style.completed);
  };
  return (
    <div>
      <h3>{props.project}</h3>
      <li>
        {props.tasks.map((item, index) => (
          <div>
            <p className={style.taskItems} onClick={deleteHandler}>
              {item}
            </p>
            {/* <button id={index} onClick={deleteHandler}>
              <BiTrash id={index} className={style.icon} />
            </button> */}
          </div>
        ))}

        <button onClick={deleteAll}>
          <BiTrash className={style.icon} /> Delete All
        </button>
      </li>
    </div>
  );
};

export default ActionItem;
