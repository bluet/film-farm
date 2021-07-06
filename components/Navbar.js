import { ImFilm } from "react-icons/im";

function Navbar() {
  return (
    <nav className="flex items-center justify-center h-12 text-white bg-codGray-900">
      <div className="pl-2 w-[1220px]">
        <a href="/">
          <div className="inline-flex items-center space-x-2 cursor-pointer">
            <ImFilm className="text-xl text-red-700" />
            <h1>Film Farm</h1>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
