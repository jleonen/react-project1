import { useState } from "react";

const formControl = (updateFunction) => {
  const newItemHandler = function (name, content) {
    updateFunction((prevItems) => {
      return [
        ...prevItems,
        {
          name: name,
          content: content,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return {
    newItemHandler,
  };
};

export default formControl;
