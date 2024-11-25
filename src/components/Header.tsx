import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import kukkad from "../assets/kukkad.jpg";
import bhoond from "../assets/bhoond.jpg";
import { useAtom } from "jotai";
import { textAtom } from "../atoms/text.atom";

function Header() {
  const location = useLocation();
  const [text] = useAtom(textAtom);

  console.log(location?.pathname);
  return (
    <div>
      <nav className="flex justify-around items-center p-4 bg-white border-gray-950 border-b-[0.5px]">
        {/* Left Side: Logo */}
        {text}
        <div className="flex items-center space-x-2">
          {location.pathname === "/cars" && (
            <img src={bhoond} alt="Logo" className="w-40" />
          )}

          {location.pathname === "/animals" && (
            <img src={kukkad} alt="Logo" className="w-40" />
          )}
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
          <Link
            to="/users"
            className={`hover:text-black ${
              location?.pathname === "/users" ? "text-black" : ""
            }`}
          >
            Users
          </Link>
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between space-x-5 bg-white px-4">
              <a
                className="menu-hover text-base font-medium text-black lg:mx-4"
                onclick=""
              >
                Concepts
              </a>
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <Link
                to={"/concepts/use-ref"}
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              >
                Use Ref
              </Link>
              <Link
                to={"/concepts/use-effect"}
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              >
                Use Effect
              </Link>
            </div>
          </div>
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
