import React, { useState } from "react";
function Todo() {
  const [item, setItem] = useState([]);
  const [desc, setDesc] = useState("");
  const [pickedItems, setPicked] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { picked: false, desc, id: Date.now() };
    setItem([...item, newItem]);
    setDesc("");
  }
  function handleDelete(id) {
    setItem((item) => item.filter((i) => i.id !== id));
  }
  function handlePicked(id) {
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
        <div className="card">
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

export default Todo;
