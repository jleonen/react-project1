import React from "react";

import { BiTrash } from "react-icons/bi";

const ProjectItem = function (props) {
  const deleteHandler = () => props.onDelete(props.id);
  return (
    <li>
      {props.children}
      <BiTrash onClick={deleteHandler} />
    </li>
  );
};

export default ProjectItem;
