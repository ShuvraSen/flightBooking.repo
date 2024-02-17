import { TbPlaneInflight } from "react-icons/tb";

const Header = () => {
  return (
    <header className="w-full bg-slate-100 mx-auto max-w-7xl p-4 rounded-md">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <TbPlaneInflight className="text-3xl" />
          <a href="/" className="font-semibold text-lg">
            Flight Booking
          </a>
        </div>
        <button className="text-xl font-semibold bg-blue-700 px-4 py-2 rounded-xl">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
