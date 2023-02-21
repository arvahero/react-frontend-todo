import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck"

const TodoItem = ({todo, removeTodo, updateTodo}) => {

  const {id, title, completed} = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-300 dark:bg-gray-800">
          <button className={`items-center justify-center flex h-5 w-5 rounded-full border-2 ${
            completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block"
          }`}
            onClick={()=> updateTodo(id)}
          >
            {completed && <IconCheck/>}
            </button>
          <p className={`grow text-gray-600 dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
          <button className="flex-none" onClick={()=>removeTodo(id)}>
          <IconCross></IconCross>
          </button>
        </article>
    );
};

export default TodoItem;  