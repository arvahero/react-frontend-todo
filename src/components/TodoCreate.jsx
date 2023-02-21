import { useState } from "react";

const TodoCreate = ({createTodo}) => {

const [title, setTitle] = useState ("")

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        console.log(title);

        if(!title.trim()){
            return setTitle("");
        }
            createTodo(title);
            setTitle("");
    };
    return (
        <form onSubmit={handleSubmitAddTodo} className="flex gap-4 bg-white rounded-md overflow-hidden py-3 px-3 items-center dark:bg-gray-800 ">
            <span className="h-5 w-5 rounded-full border-2 inline-block "></span>
            <input 
                type="text" 
                placeholder="Create new todo" 
                className="w-full text-gray-400 outline-none dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;