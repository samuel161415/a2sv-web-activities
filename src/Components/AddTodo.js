import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useRef } from "react";
import "./AddTodo.css";

const AddTodo = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current === null || inputRef.current.value === "") return;
    const despriction = inputRef.current.value;
    dispatch(addTodo(despriction));
    inputRef.current.value = "";
  };
  return (
    <center>
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" ref={inputRef} className="todo-input" />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </center>
  );
};

export default AddTodo;
