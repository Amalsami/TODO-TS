import React from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({ handleSubmit, setDesc }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setDesc(e.target.value)}></input>
        <button>Add</button>
      </form>
    </div>
  );
};
export default Form;
