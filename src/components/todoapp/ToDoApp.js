import ListToDo from "./ListToDo"
import AddToDo from "./AddToDo"

import {useState, useEffect} from "react"

function ToDoApp(props) {

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }
  const handleItemDelete = (id) => {
    setItems(items.filter( (item, index) => {return index != id} ))
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items]);

  return (
    <div className="kontajner" id="zoznam_uloh">
      <ListToDo phrase={props.phrase} items={items} onItemDelete={handleItemDelete} />
      <AddToDo phrase={props.phrase} onItemSubmit={handleItemSubmit} />
    </div>
  );
}

export default ToDoApp;
