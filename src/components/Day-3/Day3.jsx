import { useState } from "react";

function Day3() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");
  console.log(items);
  function todoList(e) {
    setTodo(e.target.value);
  }
  function addTodo(e) {
    e.preventDefault();
    setItems((prev, i) => [
      ...prev,
      { id: prev.length + 1, curTodo: todo, completed: false },
    ]);
    setTodo("");
  }
  function clearTodo(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <div className="todo-container">
      <input
        type="text"
        value={todo}
        onChange={(e) => todoList(e)}
        placeholder="your todo list"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {items.map((item) => (
          <span key={item.id} className="item-container">
            <li className={item.completed ? "completed" : ""}>
              {item.curTodo}
            </li>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => clearTodo(item.id)}
            />
          </span>
        ))}
      </ul>
    </div>
  );
}

export default Day3;
