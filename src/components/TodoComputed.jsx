const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return (
        <section className="py-4 px-4 justify-between flex bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-300">{computedItemsLeft} items left</span>
            <button className="text-gray-300" onClick={clearCompleted}>
                Clear Completed
            </button>
          </section> 
    );
};

export default TodoComputed;