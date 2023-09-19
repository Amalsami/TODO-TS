import React, { useState } from "react";
interface todo {
  picked: boolean;
  desc: string;
  id: number;
}
function Todoo(): JSX.Element {
  const [item, setItem] = useState<todo[]>([]);
  const [desc, setDesc] = useState<string>("");
  const [pickedItems, setPicked] = useState<{ [key: number]: boolean }>({});
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newItem: todo = { picked: false, desc, id: Date.now() };
    setItem([...item, newItem]);
    setDesc("");
  }
  function handleDelete(id: number) {
    setItem((item) => item.filter((i) => i.id !== id));
  }
  function handlePicked(id: number) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, picked: !item.picked } : item
      )
    );
    setPicked((prevPickedItems) => ({
      ...prevPickedItems,
      [id]: !prevPickedItems[id],
    }));
  }
  function handleDeletePicked() {
    setItem((items) => items.filter((item) => !item.picked)); // Remove picked items
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setDesc(e.target.value)}></input>
        <button>add</button>
      </form>
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
      <button onClick={() => setItem([])}>reset</button>
      <button onClick={handleDeletePicked}>remove picked</button>
    </div>
  );
}

export default Todoo;
