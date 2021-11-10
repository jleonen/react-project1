const useItemControl = (updateFunction) => {
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
