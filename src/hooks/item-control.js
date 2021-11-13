import { useState } from "react";

const useItemControl = (updateFunction) => {
  const [modal, setModal] = useState(false);
  const newItemHandler = function (name, content) {
    updateFunction((prevItems) => {
      const existingItem = prevItems.filter(
        (item) => item.name.toLowerCase().trim() === name.toLowerCase().trim()
      );
      if (existingItem.length >= 1) {
        console.log("Updating action items");
        // console.log(existingItem);
        existingItem[0]["content"] = [...existingItem[0].content, content];
        // console.log(existingItem[0].content);
        setModal(false);
        return [...prevItems];
      } else {
        console.log("Making new item");
        setModal(false);
        return [
          ...prevItems,
          {
            name: name,
            // content: [
            //   {
            //     id: Math.random().toString(),
            //     description: content,
            //   },
            // ],
            content: [content],
            id: Math.random().toString(),
          },
        ];
      }
    });
  };

  const deleteItem = (id, event) => {
    console.log(event.target.innerHTML);
    // console.log(id);

    updateFunction((prevItems) => {
      "Length is 1";
      let updatedProjects = prevItems.filter((project) => project.id === id);
      if (updatedProjects[0]["content"].length === 1) {
        const updatedTaskList = prevItems.filter(
          (project) => project.id !== id
        );
        return updatedTaskList;
      } else {
        console.log("More than 1");

        const updatedActionList = prevItems.filter(
          (project) => project.id === id
        );
        updatedActionList[0]["content"] = updatedActionList[0][
          "content"
        ].filter((item) => item !== event.target.innerHTML);
        // console.log(updatedActions);
        console.log(updatedActionList[0]["content"]);
        return [...prevItems];
      }
    });

    // updateFunction((prevItems) => {
    //   const updatedProjects = prevItems.filter((project) => project.id !== id);

    //   return updatedProjects;
    // });
  };

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
