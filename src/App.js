import React, { useState, useEffect } from "react";
import AddProject from "./Components/AddProject";
import InputProject from "./Components/InputProject";
// import ActionItemModal from "./Components/ActionItemModal";
import ActionItemForm from "./Components/ActionItemForm";
import ActionItem from "./Components/ActionItem";
import AddActionItem from "./Components/AddActionItem";

function App() {
  // const [newProject, setNewProject] = useState(() => {
  //   const savedProjects = [...JSON.parse(localStorage.getItem("Project"))];
  //   return savedProjects;
  // });
  const [newProject, setNewProject] = useState([
    ...JSON.parse(localStorage.getItem("Project")),
  ]);
  const [actionItems, setActionItems] = useState([]);

  const newProjectHandler = function (projectName, desc) {
    setNewProject((prevProjects) => {
      return [
        ...prevProjects,
        { name: projectName, description: desc, id: Math.random().toString() },
      ];
    });
    console.log(newProject);
  };

  useEffect(() => {
    localStorage.setItem("Project", JSON.stringify(newProject));
  }, [newProject]);

  const deleteProject = (projectID) => {
    setNewProject((prevProjects) => {
      const updatedProjects = prevProjects.filter(
        (project) => project.id !== projectID
      );

      return updatedProjects;
    });
  };

  const addActionHandler = (data) => {
    console.log(data);
    setActionItems((prevItem) => {
      return [...prevItem, { id: Math.random().toString(), content: data }];
    });
    console.log(actionItems);
  };

  const deleteActionItem = (actionID) => {
    setActionItems((prevActions) => {
      const updatedActionItems = prevActions.filter(
        (project) => project.id !== actionID
      );

      return updatedActionItems;
    });
  };

  let content = <p>No projects found. Use form above to add a project.</p>;
  if (newProject.length > 0) {
    content = (
      <AddProject
        projects={newProject}
        onDeleteItem={deleteProject}
        actions={actionItems}
        onDeleteActionItem={deleteActionItem}
      />
    );
  }

  return (
    <div>
      <InputProject onAddProject={newProjectHandler} />
      {/* <ActionItemForm addAction={addActionHandler} /> */}
      <h1 style={{ textAlign: "center" }}>Project List </h1>

      <section>{content}</section>
      <h1>Test again</h1>
      {/* <AddActionItem
        actions={actionItems}
        onDeleteActionitem={deleteActionItem}
      /> */}
    </div>
  );
}

export default App;
