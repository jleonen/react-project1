import React from "react";
import style from "./ProjectItem.module.css";

import { BiTrash } from "react-icons/bi";

const ProjectItem = function (props) {
  const deleteHandler = () => props.onDelete(props.id);
  return (
    <li className={style.lineItem}>
      {props.children}
      {/* <BiTrash className={style.icon} onClick={deleteHandler} />
      <span onClick={deleteHandler}>Delete Project</span> */}
      <button onClick={deleteHandler}>
        <BiTrash className={style.icon} />
        Delete Project
      </button>
    </li>
  );
};

export default ProjectItem;
