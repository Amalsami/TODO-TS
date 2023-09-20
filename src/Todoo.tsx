import React, { useState } from "react";

import Form from "./Form";
import View from "./View";
import Footer from "./Footer";
import Test from "./Test";
export interface Todo {
  picked: boolean;
  desc: string;
  id: number;
}
function Todoo(): JSX.Element {
  const [item, setItem] = useState<Todo[]>([]);
  const [desc, setDesc] = useState<string>("");
  const [pickedItems, setPicked] = useState<{ [key: number]: boolean }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newItem: Todo = { picked: false, desc, id: Date.now() };
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
    <>
      <div className="container">
        <Form handleSubmit={handleSubmit} setDesc={setDesc}></Form>
        <View
          handleDelete={handleDelete}
          pickedItems={pickedItems}
          handlePicked={handlePicked}
          item={item}
        ></View>
        <Footer
          handleDeletePicked={handleDeletePicked}
          setItem={setItem}
        ></Footer>
      </div>
    </>
  );
}

export default Todoo;
