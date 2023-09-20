import React from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ handleSubmit, setDesc }: FormProps) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setDesc(e.target.value)}></input>
        <button style={{ backgroundColor: "#8ae38a" }}>Add</button>
      </form>
    </>
  );
}
