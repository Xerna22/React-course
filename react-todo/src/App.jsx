const App = () => {
  return (
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold tracking-[0.5em] uppercase text-white ">
            todo
          </h1>
          <button>🌙</button>
        </div>
        <form
          className="flex items-center gap-4 rounded-md 
        overflow-hidden bg-white py-3 px-4 mt-5 mb-3"
          action=""
        >
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <article className="flex justify-between">
          <button>⭕</button>
          <p>Compleatat curso de React</p>
          <button>✖️</button>
        </article>
        <article className="flex justify-between">
          <button>⭕</button>
          <p>Compleatat curso de React</p>
          <button>✖️</button>
        </article>
        <article className="flex justify-between">
          <button>⭕</button>
          <p>Compleatat curso de React</p>
          <button>✖️</button>
        </article>

        <section>
          <span>5 items left</span>
          <button>Clear Completed</button>
        </section>
      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
