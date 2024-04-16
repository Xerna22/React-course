import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">
      <Header />

      <main className="container mx-auto px-4 ">
        {/*TodoCreate*/}
        <TodoCreate />

        {/*TodoList (TodoItem) TodoUpdate y TodoDelete */}
        <div className=" rounded-t-md bg-white ">
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Compleatat curso de React</p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Compleatat curso de React</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">Compleatat curso de React</p>
            <button>
              <CrossIcon />
            </button>
          </article>
        </div>

        {/*TodoComputed*/}
        <section className="flex justify-between p-4 bg-white rounded-b-md">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Completed</button>
        </section>
      </main>

      {/* TodoFilter */}
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className="text-blue-600 font-semibold">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <footer className="text-center pt-8">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
