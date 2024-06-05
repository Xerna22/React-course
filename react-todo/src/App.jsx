import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300">
      <Header />

      <main className="container mx-auto px-4 ">
        <TodoCreate />

        <TodoList />

        <TodoComputed />
      </main>

      <TodoFilter />

      <footer className="text-center pt-8">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
