import { useState } from "react";

const useItemControl = (updateFunction) => {
  const [modal, setModal] = useState(false);
  const newItemHandler = function (name, content) {
    updateFunction((prevItems) => {
      const existingItem = prevItems.filter(
        (item) => item.name.toLowerCase().trim() === name.toLowerCase().trim()
      );
      if (existingItem.length >= 1) {
        existingItem[0]["content"] = [...existingItem[0].content, content];
        setModal(false);
        return [...prevItems];
      } else {
        console.log("Making new item");
        setModal(false);
        return [
          ...prevItems,
          {
            name: name,
            content: [content],
            id: Math.random().toString(),
          },
        ];
      }
    });
  };

  const deleteItem = (id, event) => {
    // console.log(event.target.innerHTML);

    updateFunction((prevItems) => {
      const targetProject = prevItems.filter((project) => project.id === id);

      //code re-runs if block after update.Set length to 0
      //if project does not have any more items left, delete the whole project from task list
      if (targetProject[0]["content"].length === 0) {
        const updatedTaskList = prevItems.filter(
          (project) => project.id !== id
        );
        return updatedTaskList;
      } else {
        //change value of content property
        targetProject[0]["content"] = targetProject[0]["content"].filter(
          (item) => item !== event.target.innerHTML
        );
        return [...prevItems];
      }
    });
  };

  const deleteAll = (id) => {
    updateFunction((prevItems) => {
      const updatedTaskList = prevItems.filter((project) => project.id !== id);
      return updatedTaskList;
    });
  };

  return {
    newItemHandler,
    deleteItem,
    modal,
    setModal,
    deleteAll,
  };
};

export default useItemControl;
