import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


function App() {

  let [inputValue, setInputValue] = useState(""); // el estado inicial es unstring vacío
  let [taskList, setTaskList] = useState([]); // el estado inicial es un array vacío

  useEffect(() => {
    localStorage.getItem("localStorage-TaskList") === null
      ? localStorage.setItem("localStorage-TaskList", JSON.stringify([]))
      : setTaskList(JSON.parse(localStorage.getItem("localStorage-TaskList")));
  }, []); // se almacena las tareas en localStorage

  useEffect(() => {
    localStorage.setItem("localStorage-TaskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <main >
        <h1>Aplicación de Tareas UTN </h1>
        <TaskForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      </main>
    </div>
  );
}

export default App
