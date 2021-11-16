import ActionItem from "./ActionItem";
import ActionItemForm from "./ActionItemForm";
import { useState, useEffect } from "react";
import classes from "./AddActionItem.module.css";
import useItemControl from "../../hooks/item-control";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const AddActionItem = (props) => {
  const [actionItems, setActionItems] = useState([
    ...JSON.parse(localStorage.getItem("Tasks")),
  ]);

  const {
    newItemHandler: addActionHandler,
    deleteItem: deleteActionItem,
    modal,
    setModal,
    deleteAll,
  } = useItemControl(setActionItems);

  const toggleModalHandler = () => {
    setModal(!modal);
  };

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
      {modal && (
        <Modal onClose={toggleModalHandler}>
          <ActionItemForm
            addAction={addActionHandler}
            newProject={props.projectNames}
            projectList={props.projects}
          />
        </Modal>
      )}
      <ul className={classes.content}>
        <h2 className={classes.taskHeading}>Today's Tasks</h2>
        {actions.map((item) => (
          <ActionItem
            id={item.id}
            key={item.id}
            tasks={item.content}
            project={item.name}
            onDeleteItem={deleteActionItem}
            onDeleteAll={deleteAll}
          />
        ))}
      </ul>
      {/* <div className={classes.buttonSection}>
        <button onClick={toggleModalHandler} className={classes.btnModal}>
          <RiAddCircleFill className={classes.btnIcon} />
          <span>Add New Task</span>
        </button>
      </div> */}
      {actionItems.length === 0 && (
        <span className={classes.startingContent}>
          There are no tasks at the moment. Click below to add a task!
        </span>
      )}
      <Button onClick={toggleModalHandler}>
        <span>Add Task</span>
      </Button>
    </div>
  );
};

export default AddActionItem;
