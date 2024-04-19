import axios from "axios";
import React, { useState } from "react";

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
    <div className="container mx-auto my-10">
      <div className="w-3/5 mx-auto p-10 shadow-md bg-white">
        <form className="w-3/5 mx-auto" onSubmit={formSubmit}>
          <div className="text-center text-4xl text-cyan-600 mb-5">
            <h2>Your Query</h2>
          </div>

          {/* text field */}
          <div className="my-5">
            <label
              for="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Note
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <textarea
                rows="3"
                cols=""
                className="block w-full placeholder:text-lg rounded-md border-0 py-1.5 pl-4 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:border-0 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                placeholder="Your Input"
                onChange={(e) => setSearchText(e.target.value)}
              ></textarea>
            </div>
          </div>

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
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
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
                  <p className="mb-2 text-sm text-gray-500 ">
                    <span className="font-semibold">Click to upload</span> your
                    File
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
              className="inline-block  bg-cyan-600 px-6 py-2.5 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Upload
            </button>
          </div>
        </form>

        {/* output */}

        <div>
          <div className="text-xl mb-2 font-bold">Your Results:</div>
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
    </div>
  );
};
// 21
export default Form;
