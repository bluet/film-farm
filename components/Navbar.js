import { ImFilm } from "react-icons/im";

function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full h-12 text-white bg-codGray-900">
      <div className="flex items-center justify-between w-full px-3 max-w-[980px]">
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
