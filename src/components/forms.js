import React from "react";

const FormInputNumber = () => {
  return <input type="number" className="text-input"></input>;
};

const FormInputText = () => {
  return <input type="text" className="number-input"></input>;
};

// const FormLabel = () => {
//   return <label className="form-label"></label>;
// }; This must be unique for every input

const FormDate = () => {
  return <input type="date" className="date-input"></input>;
};

const FormRange = () => {
  return (
    <input
      type="range"
      className="range-input"
      min="0"
      max="10"
      step="1"
    ></input>
  );
};

const FormTextArea = () => {
  return <textarea className="text-areas"></textarea>;
};

const FormItem = {
  Number: FormInputNumber,
  Text: FormInputText,
  Date: FormDate,
  Range: FormRange,
  TextArea: FormTextArea,
};

export default FormItem;
