import React, { useState, useEffect } from "react";
import AddProject from "./Components/Add Project/AddProject";
import InputProject from "./Components/Add Project/InputProject";
// import ActionItemModal from "./Components/ActionItemModal";
import AddActionItem from "./Components/Action Items/AddActionItem";
import useItemControl from "./hooks/item-control";
import Modal from "./Components/UI/Modal";
import classes from "./App.module.css";
import { RiErrorWarningFill, RiAddCircleFill } from "react-icons/ri";
import Button from "./Components/UI/Button";
function App() {
  // const [newProject, setNewProject] = useState(() => {
  //   const savedProjects = [...JSON.parse(localStorage.getItem("Project"))];
  //   return savedProjects;
  // });
  const [newProject, setNewProject] = useState([
    ...JSON.parse(localStorage.getItem("Project")),
  ]);
  const {
    newItemHandler: newProjectHandler,
    deleteItem: deleteProject,
    modal,
    setModal,
  } = useItemControl(setNewProject);

  useEffect(() => {
    localStorage.setItem("Project", JSON.stringify(newProject));
  }, [newProject]);

  const toggleModalHandler = () => {
    setModal(!modal);
  };

  let content = <p>No projects found. Use form above to add a project.</p>;
  if (newProject.length > 0) {
    content = <AddProject projects={newProject} onDeleteItem={deleteProject} />;
  }

  return (
    <div>
      {modal && (
        <Modal onClose={toggleModalHandler}>
          <InputProject onAddProject={newProjectHandler} />
        </Modal>
      )}
      {/* <ActionItemForm addAction={addActionHandler} /> */}
      <AddActionItem />
      <h1 style={{ textAlign: "center" }}>Project List </h1>
      <section>{content}</section>
      {/* <div className={classes.buttonSection}>
        <button onClick={toggleModalHandler} className={classes.btnModal}>
          <RiAddCircleFill className={classes.btnIcon} />
          <span>Add New Project Idea</span>
        </button>
      </div> */}
      <Button onClick={toggleModalHandler}>
        <span>Add New Project Idea</span>
      </Button>
    </div>
  );
}

export default App;
