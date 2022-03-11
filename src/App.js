import { useState } from "react";
import Todo from "./components/Todo";
function App() {
  const [toDoList, setTodoList] = useState([]);

  const [newTodo, setNewToDo] = useState("");

  function deleteTodoApp(index) {
    let newtodoList = [...toDoList];
    newtodoList.splice(index, 1);

    setTodoList(newtodoList);
  }
  return (
    <div>
      <h1>My Todos</h1>
      <input
        type="text"
        onChange={(event) => {
          setNewToDo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          let newtodoList = [...toDoList];
          newtodoList.push(newTodo);

          setTodoList(newtodoList);
        }}
      >
        Add
      </button>

      {toDoList.map((todoitem, index) => {
        return (
          <div key={index}>
            {index + 1}

            <Todo title={todoitem} 
            onConfirmApp={()=>{deleteTodoApp(index)}} />

            <div>{todoitem}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
