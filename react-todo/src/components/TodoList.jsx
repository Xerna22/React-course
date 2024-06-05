import { defaults } from "autoprefixer";
import CrossIcon from "./icons/CrossIcon";

const TodoList = () => {
  return (
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
  );
};

export default TodoList;
