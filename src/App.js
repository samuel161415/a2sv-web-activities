import "./App.css";
import AddTodo from "./Components/AddTodo";
import DisplayTodos from "./Components/DisplayTodo";

const App = () => {
  return (
    <>
      <center>
        <h1>TODO APP</h1>
      </center>
      <AddTodo />
      <DisplayTodos />
    </>
  );
};

export default App;
