import { v4 as uuid } from "uuid"; // crea ids, la librería la saqué en https://www.npmjs.com/package/uuid

// componente: TaskForm
export default function TaskForm({
  inputValue,
  setInputValue,
  taskList,
  setTaskList,
}) {
  // obtiene los valores del input OnChange 
  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  // maneja el submit cuando ejecuta onClick
  const handleSubmit = (e) => {
    if (inputValue.trim()) {
      setTaskList([
        // spread-operator (pasa la data a un array)
        ...taskList,

        // CREA un OBJETO - cada uno se agrega al array[]:
        {
          text: inputValue.trim(),
          id: uuid(),
          done: false,
        },
      ]);
    }
    document.querySelector(".Form__input").focus();
    setInputValue(""); // al hacer on submit después que crea el objeto resetea el input value a un string vacío
    e.preventDefault(); // evita que se recargue la página
  };

  return (
   
    <form className="Form__input-form App-main__vertical">
      <input
        onChange={handleInputOnChange}
        type="text"
        className="Form__input"
        value={inputValue}
        placeholder="¿Qué haremos hoy?"
        maxLength="80"
      />
      <button onClick={handleSubmit} type="submit" className="Form__btn">
        <svg className="svg-icon" viewBox="0 0 20 20">
<path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
      </svg>
      </button>
    </form>
  );
}
