import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold tracking-[0.5em] uppercase text-white ">
          todo
        </h1>
        <button>
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
