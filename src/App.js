import React, { useState } from "react";
import AddProject from "./Components/AddProject";
import InputProject from "./Components/InputProject";
function App() {
  const [newProject, setNewProject] = useState([]);
  const newProjectHandler = function (projectName, desc) {
    setNewProject((prevProjects) => {
      return [
        ...prevProjects,
        { name: projectName, description: desc, id: Math.random().toString() },
      ];
    });
  };

  const deleteProject = (projectID) => {
    console.log("Deleting");
    setNewProject((prevProjects) => {
      const updatedProjects = prevProjects.filter(
        (project) => project.id !== projectID
      );

      return updatedProjects;
    });
  };

  let content = <p>No projects found. Use form above to add a project.</p>;
  if (newProject.length > 0) {
    content = <AddProject projects={newProject} onDeleteItem={deleteProject} />;
  }

  return (
    <div>
      <InputProject onAddProject={newProjectHandler} />
      <section>{content}</section>
    </div>
  );
}

export default App;
