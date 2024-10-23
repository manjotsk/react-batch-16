import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  console.log(location);
  return (
    <footer className="bg-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                resarch
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Campaigns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Offline
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <h3 className="text -lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
