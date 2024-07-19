import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function setLocalStorage(items) {
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
}
const App = () => {
  const [items, setItems] = useState(getLocalStorage());
  function addItem(itemName) {
    const newItem = {
      name: itemName,
      id: nanoid(),
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added successfully");
  }
  function removeItem(id) {
    const newItems = items.filter((item) => id !== item.id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed successfully");
  }
  function editItem(id) {
    const newItems = items.map((item) => {
      if (id === item.id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} func={removeItem} editItems={editItem} />
    </section>
  );
};

export default App;
