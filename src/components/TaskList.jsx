import TaskItem from "./TaskItem";


export default function TaskList({ taskList, setTaskList }) {
  return (
     
    
    <ul className="TodoList__ul App-main__vertical">
      {taskList.map((taskObject) => (
        <TaskItem
          taskObject={taskObject}
          setTaskList={setTaskList}
          taskList={taskList}
          text={taskObject.text}
          key={taskObject.id}
        />
      ))}
    </ul>
  );
}
