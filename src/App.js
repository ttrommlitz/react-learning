import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Explore full react course" />
    </div>
  );
};

export default App;
