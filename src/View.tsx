import React from "react";
import { Todo } from "./Todoo";
interface ViewProps {
  handleDelete: (id: number) => void;
  handlePicked: (id: number) => void;
  pickedItems: { [key: number]: boolean };
  item: Todo[];
}
export default function View({
  handleDelete,
  handlePicked,
  pickedItems,
  item,
}: ViewProps) {
  return (
    <div>
      <div className="">
        {item.map((item) => (
          <div className="card" key={item.id}>
            <div
              role="button"
              onClick={() => handlePicked(item.id)}
              style={{
                cursor: "pointer",
                textDecoration: pickedItems[item.id] ? "line-through" : "none",
              }}
            >
              <span>{item.desc}</span>
            </div>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
