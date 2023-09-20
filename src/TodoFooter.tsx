import React from "react";
import { Todo } from "./Todoo";
interface FooterProps {
  handleDeletePicked: () => void;
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function Footer({ handleDeletePicked, setItem }: FooterProps) {
  return (
    <>
      <button
        style={{ backgroundColor: "#a89d9d" }}
        onClick={() => setItem([])}
      >
        reset
      </button>
      <button
        style={{ backgroundColor: "#f34646" }}
        onClick={handleDeletePicked}
      >
        remove picked
      </button>
    </>
  );
}
