import { ImFilm } from "react-icons/im";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full h-12 px-3 text-white bg-codGray-900">
      <div className="flex items-center space-x-2 max-w-[1366px] cursor-pointer">
        <ImFilm className="text-xl text-red-700" />
        <h1>Film Farm</h1>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
