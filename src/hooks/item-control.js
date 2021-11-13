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
    // console.log(event.target.id);

    updateFunction((prevItems) => {
      const updatedProjects = prevItems.filter((project) => project.id !== id);

      return updatedProjects;
    });
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

  return {
    newItemHandler,
    deleteItem,
    modal,
    setModal,
  };
};

export default useItemControl;
