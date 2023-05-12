/* eslint-disable react/prop-types */

const HomeAuthenticated = ({
  prompt,
  imageURL,
  handlePrompt,
  handleImageSize,
  createImg,
}) => {
  return (
    <div className="lg:flex flex-col lg:flex-row justify-center bg-base-200 h-screen pt-16 lg:pt-0">
      <div className="hero min-h-0 lg:min-h-screen lg:w-1/2 ">
        <div className="">
          <div className="">
            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
              Please Select The Size Of The Generated Images
            </h3>
            <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="imageSize"
                  value="512x512"
                  className="hidden peer"
                  onChange={handleImageSize}
                />
                <label
                  htmlFor="hosting-small"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">
                      512 x 512
                    </div>
                    <div className="w-full">Good for small websites</div>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 ml-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-big"
                  name="imageSize"
                  value="1024x1024"
                  className="hidden peer"
                  onChange={handleImageSize}
                />
                <label
                  htmlFor="hosting-big"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">
                      1024 x 1024
                    </div>
                    <div className="w-full">Good for large websites</div>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 ml-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </label>
              </li>
            </ul>
            <input
              type="text"
              placeholder="Prompt"
              className="input input-bordered input-secondary w-full max-w-xs my-8 mr-4"
              value={prompt}
              onChange={handlePrompt}
            />
            <button
              type="submit"
              onClick={createImg}
              className="btn btn-primary"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-base-200 mx-auto lg:w-1/2 mt-10">
        <div className="w-11/12 lg:w-full">
          <div className="mx-auto px-2">
            <div className="-m-1 flex flex-col lg:flex-row justify-center flex-wrap md:-m-2">
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[0] && (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[0].url}
                    />
                  )}
                </div>
              </div>
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[0] && (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[0].url}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto px-2 mt-2">
            <div className="-m-1 flex flex-col lg:flex-row justify-center flex-wrap md:-m-2">
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[1] && (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[1].url}
                    />
                  )}
                </div>
              </div>
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[1] && (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[1].url}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAuthenticated;
