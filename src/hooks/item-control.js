import { useState } from "react";

const useItemControl = (updateFunction) => {
  const [modal, setModal] = useState(false);
  const newItemHandler = function (name, content) {
    updateFunction((prevItems) => {
      const existingItem = prevItems.filter(
        (item) => item.name.toLowerCase().trim() === name.toLowerCase().trim()
      );
      if (existingItem.length >= 1) {
<<<<<<< HEAD
        console.log("Updating action items");

=======
>>>>>>> actionItems
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

<<<<<<< HEAD
  /////////////Testing for deleting specific items in task list

  //   updateFunction((prevItems) => {
  //     const currentActionItems = prevItems.filter(
  //       (project) => project.id === id
  //     );
  //     console.log(currentActionItems);
  //     if (currentActionItems.length >= 2) {
  //       console.log(currentActionItems[0]["content"]);
  //       // const updatedActionItems = currentActionItems[0]["content"].splice(
  //       //   event.target.id,
  //       //   1
  //       // );
  //       currentActionItems[0]["content"].splice(event.target.id, 1);
  //       console.log(currentActionItems);
  //       // const updatedProjects = prevItems.filter(
  //       //   (project) => project.id !== id
  //       // );
  //       // return [...prevItems, ...updatedActionItems];
  //       return [...prevItems];
  //     } else {
  //       console.log("active");
  //       updateFunction((prevItems) => {
  //         const updatedProjects = prevItems.filter(
  //           (project) => project.id !== id
  //         );
  //         return updatedProjects;
  //       });
  //       // };
  //     }
  //   });
  // };
=======
  const deleteAll = (id) => {
    updateFunction((prevItems) => {
      const updatedTaskList = prevItems.filter((project) => project.id !== id);
      return updatedTaskList;
    });
  };
>>>>>>> actionItems

  return {
    newItemHandler,
    deleteItem,
    modal,
    setModal,
    deleteAll,
  };
};

export default useItemControl;
