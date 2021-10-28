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
    console.log(newProject);
  };
  return (
    <div>
      <InputProject onAddProject={newProjectHandler} />
    </div>
  );
}

export default App;
