const TodoCreate = () => {
  return (
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
  );
};

export default TodoCreate;
