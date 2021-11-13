import classes from "./Button.module.css";
import { RiErrorWarningFill, RiAddCircleFill } from "react-icons/ri";

const Button = (props) => {
  return (
    <div className={classes.buttonSection}>
      <button type={props.type} onClick={props.onClick}>
        <RiAddCircleFill className={classes.buttonIcon} />
        {props.children}
      </button>
    </div>
  );
};

export default Button;
