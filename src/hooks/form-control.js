import { useState, useReducer } from "react";

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 0 };
  }
  if (action.type === "BLUR") {
    return { isValid: state.value.trim().length > 0, value: state.value };
  }
  if (action.type === "RESET") {
    return { isValid: false, value: "" };
  }
  return inputStateReducer;
};
// const descStateReducer = (state, action) => {
//   if (action.type === "INPUT") {
//     return { value: action.value, isValid: true };
//   }
//   if (action.type === "RESET") {
//     return { isValid: true, value: "" };
//   }
//   return descStateReducer;
// };

const useFormControl = (validateValue) => {
  //   const [validName, setValidName] = useState(true);
  //   const [validDesc, setValidDesc] = useState(true);
  const [formIsValid, setFormIsValid] = useState(true);

  const [inputState, dispatchInput] = useReducer(inputStateReducer, {
    value: "",
    isValid: null,
  });
  //   const [descriptionState, dispatchDesc] = useReducer(descStateReducer, {
  //     value: "",
  //     isValid: null,
  //   });
  //   const nameHandler = (event) => {
  //     dispatchName({ type: "INPUT", value: event.target.value });
  //     // event.target.value.trim().length > 0 && setValidName(true);
  //     // console.log(event.target);

  //     // updateName(event.target.value);
  //   };

  const contentHandler = (event) => {
    // event.target.value.trim().length > 0 && setValidDesc(true);
    dispatchInput({ type: "INPUT", value: event.target.value });

    // updateContent(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatchInput({ type: "BLUR" });
  };

  // const valueIsValid = validateValue(inputState.value);
  // const valueIsValid = inputState.value.trim().length > 0;
  // const error = !valueIsValid && inputState.isTyping;
  // const error = true;
  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  //   const submitHandler = (event) => {
  //     event.preventDefault();

  //     currentName.trim().length === 0 && setValidName(false);

  //     currentContent.trim().length === 0 && setValidDesc(false);

  //     currentName.trim().length > 0 &&
  //       currentContent.trim().length > 0 &&
  //       props.onAddProject(currentName, currentContent);
  //     updateName("");
  //     updateContent("");
  //   };
  return {
    value: inputState.value,
    isValid: inputState.isValid,
    blur: inputBlurHandler,
    // typing: inputState.isTyping,
    // error,
    formIsValid,
    setFormIsValid,
    contentHandler,
    // submitHandler,
    reset,
  };
};

export default useFormControl;
