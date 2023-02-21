import { useState } from "react";
import Header from "./components/Header";

import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title:"Titulo 1", completed: true },
  { id: 2, title:"Titulo 2", completed: false },
  { id: 3, title:"Titulo 3", completed: false },
  { id: 4, title:"Titulo 4", completed: false },
  { id: 5, title:"Titulo 5", completed: true }
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length +1,
      title,
      completed: false
    }

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
      setTodos(todos.filter(todo=> todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(
        todo=> todo.id === id? {...todo, completed: !todo.completed}: todo));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
      switch (filter){
        case "all":
          return todos;
        case "active":
          return todos.filter(todo => !todo.completed);
          case "completed":
            return todos.filter(todo => todo.completed);
      }
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] ">
      
      <Header></Header>

        <main className="container mx-auto mt-5 px-4">
          <TodoCreate createTodo={createTodo}></TodoCreate>
          <TodoList todos = {filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}></TodoList>
          <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
          <TodoFilter changeFilter={changeFilter} filter={filter}></TodoFilter>
        </main>
        <footer className="text-center mt-8 dark:text-gray-400">Drang an Drop to reorder list</footer>
    </div>  
  );
};

export default App;