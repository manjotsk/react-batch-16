import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const location = useLocation();

  console.log(location?.pathname);
  return (
    <div>
      <nav className="flex justify-around items-center p-4 bg-white border-gray-950 border-b-[0.5px]">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-40" />
        </div>

        {/* Middle Links */}
        <div className="flex space-x-6 text-gray-600">
          <Link
            to="/"
            className={`hover:text-black ${
              location?.pathname === "/" ? "text-black" : ""
            } `}
          >
            Home
          </Link>
          <Link
            to="/cars"
            className={`hover:text-black ${
              location?.pathname === "/cars" ? "text-black" : ""
            }`}
          >
            Cars
          </Link>
          <Link
            to="/animals"
            className={`hover:text-black ${
              location?.pathname === "/animals" ? "text-black" : ""
            }`}
          >
            Animals
          </Link>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black  hover:text-black font-bold">
            Sign In
          </a>
          <a
            href="#"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Get Started Free
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Header;