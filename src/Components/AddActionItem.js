import ActionItem from "./ActionItem";

const AddActionItem = (props) => {
  return (
    <div>
      <ul>
        {props.actions.map((item) => (
          <ActionItem
            id={item.id}
            key={item.id}
            tasks={item.content}
            onDeleteItem={props.onDeleteActionitem}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddActionItem;
