const useItemControl = (updateFunction) => {
  const newItemHandler = function (name, content) {
    updateFunction((prevItems) => {
      const existingItem = prevItems.filter((item) => item.name === name);
      if (existingItem.length === 1) {
        console.log(existingItem);
        existingItem[0]["content"] = [...existingItem[0].content, content];
        console.log(existingItem[0].content);
        return [...prevItems];
      } else {
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

  const deleteItem = (id) => {
    updateFunction((prevItems) => {
      const updatedProjects = prevItems.filter((project) => project.id !== id);

      return updatedProjects;
    });
  };

  return {
    newItemHandler,
    deleteItem,
  };
};

export default useItemControl;
