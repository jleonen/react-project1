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

  const actions = actionItems;
  // const taskList = actions.map((item) => {
  //   console.log(item);
  // });
  // console.log(taskList);
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
