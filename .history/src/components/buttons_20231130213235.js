import React from "react";

const PrimaryButton = ({ className }) => {
  return (
    <>
      <button className={className} type="submit">
        Submit
      </button>
    </>
  );
};

const DeleteButton = () => {
  return (
    <>
      <button className="delete-btn" type="button">
        Delete
      </button>
    </>
  );
};

const EditButton = () => {
  return (
    <>
      <button className="edit-btn" type="button">
        Edit
      </button>
    </>
  );
};

const ButtonClass = {
  Primary: PrimaryButton,
  Delete: DeleteButton,
  Edit: EditButton,
};

export default ButtonClass;
