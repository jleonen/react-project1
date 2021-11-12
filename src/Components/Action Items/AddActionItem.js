import ActionItem from "./ActionItem";
import ActionItemForm from "./ActionItemForm";
import { useState, useEffect } from "react";
import classes from "./AddActionItem.module.css";
import useItemControl from "../../hooks/item-control";
import Modal from "./ActionItemModal";

const AddActionItem = (props) => {
  const [actionItems, setActionItems] = useState([
    ...JSON.parse(localStorage.getItem("Tasks")),
  ]);

  const [modal, setModal] = useState(false);

  const toggleModalHandler = () => {
    setModal(!modal);
  };

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
      <button onClick={toggleModalHandler}>Show form</button>
      {modal && (
        <Modal onClose={toggleModalHandler}>
          <ActionItemForm addAction={addActionHandler} />
        </Modal>
      )}
      <ul className={classes.content}>
        <h2 className={classes.taskHeading}>Today's Tasks</h2>
        {actions.map((item) => (
          <ActionItem
            id={item.id}
            key={item.id}
            tasks={item.content}
            // tasks={item.name}
            project={item.name}
            onDeleteItem={deleteActionItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddActionItem;
