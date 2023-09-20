import React from "react";
import { Todo } from "./Todoo";
interface FooterProps {
  handleDeletePicked: () => void;
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function Footer({ handleDeletePicked, setItem }: FooterProps) {
  return (
    <div>
      <button onClick={() => setItem([])}>reset</button>
      <button onClick={handleDeletePicked}>remove picked</button>
    </div>
  );
}
