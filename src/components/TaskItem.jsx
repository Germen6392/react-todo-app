// Este componente TaskItem renderiza cada item en una lista <ul>
// Cada item  puede ser editado, borrado o marcado como completado

export default function TaskItem({ text, setTaskList, taskList, taskObject }) {
  const handleEditingTask = (e) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === taskObject.id) {
          return {
            ...item,
            text: e.target.value,
          };
        }
        return item; // Si la operacion no arroja una coincidencia devuelve el item como estaba
      })
    );
  };

  const handleCheckBtn = () => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === taskObject.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = () => {
    setTaskList(taskList.filter((item) => item.id !== taskObject.id));
  };

  return (
    <div className="Todo__div">
      <li className={`Todo__li-element `}>
        <input
          // agrega la clase basandose si la tarea fue completada o no
          className={`Todo__input ${
            taskObject.done ? "Todo__line-through" : ""
          }`}
          type="text"
          maxLength="80"
          value={text}
          onChange={handleEditingTask}
        />
      </li>
    <div className="Todo__btn_item"> 
    <button onClick={handleCheckBtn} className="Todo__btn Todo__btn-check">
        <svg className="svg-icon" viewBox="0 0 20 20">
<path fill="none" d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
      </svg>
      </button>
      <button onClick={handleDelete} className="Todo__btn Todo__btn-trash">
        <svg className="svg-icon" viewBox="0 0 20 20">
<path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
      </svg>
      </button>
    </div>
    </div>
  );
}
