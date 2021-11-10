import ActionItem from "./ActionItem";
import ActionItemForm from "./ActionItemForm";
import { useState } from "react";
const AddActionItem = (props) => {
  const [actionItems, setActionItems] = useState([]);

  const addActionHandler = (name, data) => {
    console.log(data);
    setActionItems((prevItem) => {
      return [
        ...prevItem,
        { id: Math.random().toString(), name: name, content: data },
      ];
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

  const actions = actionItems;
  return (
    <div>
      <ActionItemForm addAction={addActionHandler} />
      <ul>
        <h2>Today's Action Items </h2>
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
