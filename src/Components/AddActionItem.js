import ActionItem from "./ActionItem";

const AddActionItem = (props) => {
  return (
    <ul>
      {props.actions.map((item) => {
        <ActionItem>
          <li>{item.content}</li>
        </ActionItem>;
      })}
    </ul>
  );
};

export default AddActionItem;
