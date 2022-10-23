import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.inputType}>{props.inputLabel}</label>
      <input
        type={props.inputType}
        id={props.id}
        value={props.value}
        onChange={props.inputChangeHandler}
        onBlur={props.validateHandler}
      />
    </div>
  );
};

export default Input;
