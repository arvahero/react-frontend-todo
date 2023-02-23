import { Draggable, Droppable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <Droppable droppableId="todos">
            {
                (dropableProvider) => (
                    <div    
                        ref={dropableProvider.innerRef}
                        {...dropableProvider.droppableProps} 
                        className="bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-6">
                        {todos.map((todo, index) =>(
                            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>{
                                (draggableProvider) => (
                                <TodoItem                                  
                                    todo={todo} 
                                    removeTodo={removeTodo} 
                                    updateTodo={updateTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                            </Draggable>
                            
                        ))}
                        {dropableProvider.placeholder}
                    </div>
                )
            }                
        </Droppable>
        
    );
};

export default TodoList;