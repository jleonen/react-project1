import React from "react";
import AddProject from "./Components/AddProject";
import InputProject from "./Components/InputProject";
function App() {
  const newProjectHandler = function (name, description) {
    console.log(name, description);
  };
  return (
    <div>
      <InputProject onAddProject={newProjectHandler} />
    </div>
  );
}

export default App;
