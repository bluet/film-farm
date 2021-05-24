import { ImFilm } from "react-icons/im";

function Navbar() {
  return (
    <nav className="flex items-center justify-center text-white h-14 bg-codGray-900">
      <div className="flex items-center justify-between w-full px-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <ImFilm className="text-xl text-red-700" />
          <h1>Film Farm</h1>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
