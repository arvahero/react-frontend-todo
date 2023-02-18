import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";


const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen ">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">holis app</h1>
          <button>
            <MoonIcon></MoonIcon>
          </button>
        </div>
        <form className="flex gap-4 bg-white rounded-md overflow-hidden py-3 px-3 items-center">
          <span className="h-5 w-5 rounded-full border-2 inline-block "></span>
          <input type="text" placeholder="Create new todo" className="w-full text-gray-400 outline-none"/>
        </form>
        </header>
        <main className="container mx-auto mt-5 px-4">
          <div className="bg-white rounded-md [&>article]:p-4">
            <article className="flex gap-4 border-b border-b-gray-300">
              <button className="h-5 w-5 rounded-full border-2 inline-block flex-none"></button>
              <p className="grow text-gray-600 ">Complete online Javascript</p>
              <button className="flex-none">
                <CrossIcon></CrossIcon>
              </button>
            </article>
            <article className="flex gap-4 border-b border-b-gray-300">
              <button className="h-5 w-5 rounded-full border-2 inline-block flex-none"></button>
              <p className="grow text-gray-600 ">Complete online Javascript</p>
              <button className="flex-none">
                <CrossIcon></CrossIcon>
              </button>
            </article>
            <article className="flex gap-4 border-b border-b-gray-300">
              <button className="h-5 w-5 rounded-full border-2 inline-block flex-none"></button>
              <p className="grow text-gray-600 ">Complete online Javascript</p>
              <button className="flex-none">
                <CrossIcon></CrossIcon>
              </button>
            </article>           
          
          <section className="py-4 px-4 justify-between flex">
            <span className="text-gray-300">5 items left</span>
            <button className="text-gray-300 ">Clear Completed</button>
          </section>
          </div>
        </main>

        <section className="container mx-auto mt-8 px-4">
          <div className="flex bg-white p-4 rounded-md justify-center gap-4">
            <button className=" hover:text-blue-600">All</button>
            <button className=" hover:text-blue-600">Active</button>
            <button className=" hover:text-blue-600">Completed</button>
          </div>          
        </section>
        <p className="text-center mt-8">Drang an Drop to reorder list</p>
    </div>  
  );
};

export default App;