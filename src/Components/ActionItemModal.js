import React from "react";
import ActionItem from "./ActionItem";

const ActionItemModal = () => {
  const addActionHandler = () => {
    console.log("Modal reached");
  };

  return <ActionItem addAction={addActionHandler} />;
};

export default ActionItemModal;
