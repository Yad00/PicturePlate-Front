/* eslint-disable react/prop-types */

const HomeAuthenticated = ({
  prompt,
  imageURL,
  handlePrompt,
  handleImageSize,
  createImg,
  setImageNumber,
  imageNumber,
  imageSize,
  inputError,
  creditError,
}) => {
  return (
    <div className="lg:flex flex-col lg:flex-row justify-center bg-base-200 pt-16 lg:pt-0">
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
                    <div className="w-full">1 Credit per Image</div>
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
                    <div className="w-full">1.1 Credits per Image</div>
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
              className="input input-bordered input-secondary w-3/5 max-w-xs my-8 mr-4"
              value={prompt}
              onChange={handlePrompt}
            />
            <div className=" inline-flex flex-wrap border bg-gray-900 border-gray-200 rounded dark:border-gray-800">
              <button
                type="button"
                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                onClick={() =>
                  imageNumber > 1 && setImageNumber(imageNumber - 1)
                }
              >
                -
              </button>
              <input
                type="number"
                id="Quantity"
                value={imageNumber}
                className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] dark:bg-gray-800 dark:text-white sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                readOnly={true}
              />
              <button
                type="button"
                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                onClick={() =>
                  imageNumber < 4 && setImageNumber(imageNumber + 1)
                }
              >
                +
              </button>
            </div>
            <button
              type="submit"
              onClick={createImg}
              className="btn btn-primary w-full"
            >
              Generate
            </button>
            {((prompt.trim().length === 0 || !imageSize) && inputError) ||
            creditError ? (
              <div className="alert alert-error shadow-lg mt-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    {inputError}
                    {creditError}
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center bg-base-200 mx-auto lg:w-1/2 mt-10">
        <div className="w-11/12 lg:w-full">
          <div className="mx-auto px-2">
            <div className="-m-1 flex flex-col lg:flex-row justify-center flex-wrap md:-m-2">
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[0] ? (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[0].url}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-12 h-12 text-gray-200 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[1] ? (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[1].url}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-12 h-12 text-gray-200 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto px-2 mt-2">
            <div className="-m-1 flex flex-col lg:flex-row justify-center flex-wrap md:-m-2">
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[2] ? (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[2].url}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-12 h-12 text-gray-200 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex w-full lg:w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  {imageURL[3] ? (
                    <img
                      alt="prompt"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={imageURL[3].url}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-12 h-12 text-gray-200 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
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
