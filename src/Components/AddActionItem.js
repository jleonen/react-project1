import ActionItem from "./ActionItem";

const AddActionItem = (props) => {
  return (
    <div>
      <ul>
        <h2>Today's Action Items </h2>
        {props.actions.map((item) => (
          <ActionItem
            id={item.id}
            key={item.id}
            tasks={item.content}
            project={item.name}
            onDeleteItem={props.onDeleteActionItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddActionItem;
