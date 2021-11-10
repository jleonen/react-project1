import React, { useState, useEffect } from "react";
import AddProject from "./Components/Add Project/AddProject";
import InputProject from "./Components/Add Project/InputProject";
// import ActionItemModal from "./Components/ActionItemModal";
import ActionItemForm from "./Components/Action Items/ActionItemForm";
import ActionItem from "./Components/Action Items/ActionItem";
import AddActionItem from "./Components/Action Items/AddActionItem";
import formControl from "./hooks/form-control";
function App() {
  // const [newProject, setNewProject] = useState(() => {
  //   const savedProjects = [...JSON.parse(localStorage.getItem("Project"))];
  //   return savedProjects;
  // });
  const [newProject, setNewProject] = useState([
    ...JSON.parse(localStorage.getItem("Project")),
  ]);
  const { newItemHandler: newProjectHandler, deleteItem: deleteProject } =
    formControl(setNewProject);

  // const [actionItems, setActionItems] = useState([]);

  // const newProjectHandler = function (projectName, desc) {
  //   setNewProject((prevProjects) => {
  //     return [
  //       ...prevProjects,
  //       {
  //         name: projectName,
  //         description: desc,
  //         id: Math.random().toString(),
  //         actions: [Math.random().toString()],
  //       },
  //     ];
  //   });
  //   console.log(newProject);
  // };

  useEffect(() => {
    localStorage.setItem("Project", JSON.stringify(newProject));
  }, [newProject]);

  // const deleteProject = (projectID) => {
  //   setNewProject((prevProjects) => {
  //     const updatedProjects = prevProjects.filter(
  //       (project) => project.id !== projectID
  //     );

  //     return updatedProjects;
  //   });
  // };

  let content = <p>No projects found. Use form above to add a project.</p>;
  if (newProject.length > 0) {
    content = <AddProject projects={newProject} onDeleteItem={deleteProject} />;
  }

  return (
    <div>
      <InputProject onAddProject={newProjectHandler} />
      {/* <ActionItemForm addAction={addActionHandler} /> */}
      <AddActionItem />
      <h1 style={{ textAlign: "center" }}>Project List </h1>

      <section>{content}</section>
    </div>
  );
}

export default App;
