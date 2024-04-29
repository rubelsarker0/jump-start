import axios from "axios";
import React, { useState } from "react";
import Promts from "./Promts";
import backgroundImageSvg from "../images/robot.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faFileExport } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { data: "formData" })
      .then((res) => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/1")
          .then((res) => setSearchResult(res.data.body))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto my-10 flex">
      <div className="w-1/2  p-10 shadow-md backgroundSecondary">
        <form className=" mx-auto" onSubmit={formSubmit}>
          <div className="text-center text-2xl text-primary mb-5">
            <h6>Upload a report and select a prompt</h6>
          </div>

          {/* suggest field */}
          <Promts />

          {/* file field */}
          <div>
            <label
              for="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your File
            </label>
            <div className="flex items-center justify-center w-full mb-4">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-b border-gray-600  cursor-pointer backgroundSecondary hover:bg-zinc-800"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-primary ">
                    <span className="font-semibold">Upload SCA Report</span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  name="image"
                  // accept="image/*"
                />
              </label>
            </div>
          </div>

          {/* upload button */}
          <div className="text-center py-2">
            <button
              className="inline-block  button-primary px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase  shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Upload
            </button>
          </div>
        </form>

        {/* output */}

        <div className="text-primary mt-4">
          <div className="flex justify-between mb-3">
            <div className="text-xl mb-2" >Your Results:</div>
            <div className="text-2xl">
              <FontAwesomeIcon className="cursor-pointer " title="Copy"  icon={faCopy} /> 
              <FontAwesomeIcon className="cursor-pointer  ml-6" title="Export"  icon={faFileExport} /> 

            </div>
          </div>
          <h2 className="text-lg">
            Create React App doesn’t handle backend logic or databases; it just
            creates a frontend build pipeline, so you can use it with any
            backend you want. Under the hood, it uses Babel and webpack, but you
            don’t need to know anything about them. When you’re ready to deploy
            to production, running npm run build will create an optimized build
            of your app in the build folder. You can learn more about Create
            React App from its README and the User Guide. Next.js Next.js is a
            popular and lightweight framework for static and server‑rendered
            applications built with React. It includes styling and routing
            solutions out of the box, and assumes that you’re using Node.js as
            the server environment. Learn Next.js from its official guide.
            Gatsby Gatsby is the best way to create static websites with React.
            It lets you use React components, but outputs pre-rendered HTML and
            CSS to guarantee the fastest load time. Learn Gatsby from its
            official guide and a gallery of starter kits.
          </h2>
        </div>
      </div>
      <div className="w-1/2 flex items-center ">
        <img src={backgroundImageSvg} className="w-full ml-4" alt="" />
      </div>
    </div>
  );
};
// 21
export default Form;
