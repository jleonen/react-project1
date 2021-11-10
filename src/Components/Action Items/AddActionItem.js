import ActionItem from "./ActionItem";
import ActionItemForm from "./ActionItemForm";
import { useState, useEffect } from "react";
import classes from "./AddActionItem.module.css";
import useItemControl from "../../hooks/item-control";

const AddActionItem = (props) => {
  const [actionItems, setActionItems] = useState([
    ...JSON.parse(localStorage.getItem("Tasks")),
  ]);

  const { newItemHandler: addActionHandler, deleteItem: deleteActionItem } =
    useItemControl(setActionItems);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(actionItems));
  }, [actionItems]);

  // const [actionItems, setActionItems] = useState([]);

  // const addActionHandler = (name, data) => {
  //   console.log(data);
  //   setActionItems((prevItem) => {
  //     return [
  //       ...prevItem,
  //       { id: Math.random().toString(), name: name, content: data },
  //     ];
  //   });
  //   console.log(actionItems);
  // };

  // const deleteActionItem = (actionID) => {
  //   setActionItems((prevActions) => {
  //     const updatedActionItems = prevActions.filter(
  //       (project) => project.id !== actionID
  //     );

  //     return updatedActionItems;
  //   });
  // };

  const actions = actionItems;
  return (
    <div className={classes.actionContainer}>
      <ActionItemForm addAction={addActionHandler} />
      <ul className={classes.content}>
        <h2 className={classes.taskHeading}>Today's Tasks</h2>
        {actions.map((item) => (
          <ActionItem
            id={item.id}
            key={item.id}
            tasks={item.content}
            project={item.name}
            onDeleteItem={deleteActionItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddActionItem;
