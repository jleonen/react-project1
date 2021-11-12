const useItemControl = (updateFunction) => {
  const newItemHandler = function (name, content) {
    updateFunction((prevItems) => {
      const existingItem = prevItems.filter((item) => item.name === name);
      if (existingItem.length >= 1) {
        console.log("Updating action items");

        existingItem[0]["content"] = [...existingItem[0].content, content];

        return [...prevItems];
      } else {
        console.log("Making new item");
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

  return {
    newItemHandler,
    deleteItem,
  };
};

export default useItemControl;
