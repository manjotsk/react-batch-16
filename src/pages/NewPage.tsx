import logo from "../assets/logo.png";
import image from "../assets/image.png";
import Header from "../components/Header";

const NewPage = () => {
  return (
    <>
      <div>
        <div className="min-h-screen flex  items-center justify-center bg-white">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              We create website and applications
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mx-auto mb-8">
              We're based in NYC, which is home to so many great companies and
              communities, but it's also where we started out as a bootstrapped
              team of two people working from their apartments.
            </p>
            {/* Illustration and Call to Action */}

            <div className="flex  justify-center items-center space-y-4">
              {/* Button */}
              <button className="px-2 py-2 bg-blue-600 text-white  rounded-lg shadow-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300">
                <span>Meet The Expert</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Watch Video Link */}
              <button className="flex items-center space-x-2 text-gray-900 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-4.036-2.253A1 1 0 009 9.768v4.464a1 1 0 001.716.804l4.036-2.253a1 1 0 000-1.608z"
                  />
                </svg>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Placeholder for Image */}
          <div className="mt-12">
            <img
              src={image} // Use the correct path or URL for the image
              alt="Illustration"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-evenly bg-white  p-10 border-t items-center text-3xl">
          <div>
            {/* Main Text */}
            <h1 className="text-5xl font-light text-black">
              Delivering tech <br /> solutions
            </h1>
          </div>
          <div>
            <p className="text-sm text-gray-500 w-48">
              We are a team of 20+ who are passionate about making the world a
              better place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-6 grid-rows-6 gap-4 p-8">
          {/* Block 1: Large left block */}
          <div className="col-span-2 row-span-6 bg-gradient-to-b from-gray-500 to-gray-200 text-white p-6 rounded-lg flex flex-col justify-between">
            <h2 className="text-sm font-semibold">READY FOR FUTURE</h2>
            <h1 className="text-4xl font-bold my-4">
              Leveraging tech to drive a better IT experience
            </h1>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 self-start">
              See Incredible Work &rarr;
            </button>
          </div>

          {/* Block 2: Top-right smaller card */}
          <div className="col-span-2 row-span-3 col-start-3 bg-blue-500 text-white p-6 rounded-lg flex flex-col justify-between">
            <h3 className="text-sm font-light">
              We have shared our journey and some story
            </h3>
            <h2 className="text-2xl font-bold mt-4">Read our blog</h2>
            <button className="mt-4 text-white">&rarr;</button>
          </div>

          {/* Block 3: Bottom-right smaller card */}
          <div className="col-span-2 row-span-3 col-start-3 row-start-4 bg-gray-200 p-6 rounded-lg flex flex-col justify-between">
            <p className="text-sm font-light">
              It’s a must to share our workflow to believe you
            </p>
            <h2 className="text-2xl font-bold mt-4">See our workflow</h2>
            <button className="mt-4 text-black">&rarr;</button>
          </div>

          {/* Block 4: Large right card */}
          <div className="col-span-2 row-span-6 col-start-5 row-start-1 bg-gray-200 p-6 rounded-lg flex flex-col justify-between">
            <p className="text-sm font-light">
              2,000+ team members around the world creating incredible and
              amazing projects
            </p>
            <button className="mt-4 text-black">Meet Our Expert &rarr;</button>
          </div>
        </div>
      </div>

      <div>
        <div className=" bg-white flex items-center justify-center">
          <div className="container  px-6 py-12 flex  justify-between ">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800">
                Analyses Data with <br /> AI Technology
              </h1>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-2 ">
              {/* Left side illustration */}

              {/* Right side list of features */}
              <div className="flex flex-col justify-center">
                <ul className="space-y-4">
                  {[
                    "Potential For Success",
                    "Dashboard Access",
                    "Perpetual Data Backup",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="inline-block mr-3 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="space-y-4">
                  {[
                    "24/7 Support",
                    "Advanced Protection",
                    "Secure and Controlled Data",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center  text-gray-700"
                    >
                      <span className="inline-block mr-3 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={logo} // Replace with actual illustration path
            alt="SEO Illustration"
            className="max-w-full"
          />
        </div>
      </div>

      <div>
        <div className=" m-4 flex justify-center gap-1 p-8 shadow-md rounded-lg  bg-white  w-full max-w-4xl mx-auto">
          <div>
            <div className=" mb-10">
              <h1 className="text-4xl font-bold text-gray-800">Why we are</h1>
              <h1 className="text-4xl font-bold text-gray-800">
                different from other
              </h1>
              <h1 className="text-4xl font-bold text-gray-800">startups</h1>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <p className=" w-[60%] text-gray-600 mb-4 ">
                  With us you can create a mobile app for your business in 2
                  weeks as well as create a website for your business in 2 days.
                </p>
                <div className="bg-gray-100 rounded-md p-4 shadow-sm w-48">
                  <div className="flex items-center relative">
                    <div className="w-10 h-10 absolute  top-0 left-16 bg-gray-400 rounded-full mr-1"></div>
                    <div className="w-10 h-10 absolute top-0 left-20 bg-gray-500 rounded-full mr-1"></div>
                    <div className="w-10 h-10 absolute top-0 left-24 bg-gray-600 rounded-full"></div>
                  </div>
                  <p className="text-2xl font-bold mt-2">1.289</p>
                  <p className=" text-gray-600">Our Remote Team</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2  bg-gray-200 rounded-lg p-8">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold">Our Mission</p>
            <p className="text-lg text-gray-600">
              Our mission is to help small businesses to grow and succeed in the
              digital world.
            </p>
          </div>
        </div>

        <div>
          <div className="container mx-auto px-4 py-16 ">
            <div className="flex gap-4 justify-around">
              <div className="mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  How to Plan for a
                </h1>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Comfortable and
                </h1>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Secure Future
                </h1>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-gray-600 text-lg leading-relaxed mb-4   w-[500px]">
                    Li Europan lingues es membres del sam familie. Lor separat
                    existentie es un myth. Por scientie, musica, sport etc,
                    litot Europa usa li sam vocabular. Li lingues differre
                    solmen in li grammatica, li pronunciation e li plu commun
                    vocabules.
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Explore Me
                  </button>
                </div>
              </div>
            </div>

            <div>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPage;
