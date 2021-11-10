import React from "react";
import ActionItemForm from "./ActionItemForm";

const ActionItemModal = () => {
  const addActionHandler = () => {
    console.log("Modal reached");
  };

  return <ActionItemForm addAction={addActionHandler} />;
};

export default ActionItemModal;
