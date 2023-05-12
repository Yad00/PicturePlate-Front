import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import LoginButton from './LoginButton';
import stake1 from './assets/stake1.png';
import stake2 from './assets/stake2.png';
import HomeAuthenticated from './HomeAuthenticated';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [prompt, setPrompt] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [imageURL, setImage] = useState([]);

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const handleImageSize = (e) => {
    setImageSize(e.target.value);
  };

  const createImg = async () => {
    const response = await axios.post('http://localhost:8080/create', {
      prompt,
      imageSize,
    });
    setImage(response.data);
  };

  if (isAuthenticated) {
    return (
      <HomeAuthenticated
        imageURL={imageURL}
        handlePrompt={handlePrompt}
        handleImageSize={handleImageSize}
        createImg={createImg}
        prompt={prompt}
      />
    );
  }

  return (
    <div className="flex justify-center">
      <div className="hero min-h-screen lg:w-1/2 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Create Mouth-Watering Recipe Images with PicturePlate
            </h1>
            <p className="py-6">
              PicturePlate AI is a powerful SaaS platform that uses AI image
              generation technology to help food bloggers and recipe creators
              create stunning images for their recipes effortlessly. With
              PicturePlate, you can say goodbye to the hassle of creating recipe
              images manually. Our platform uses the latest AI technology to
              generate beautiful, high-quality recipe images that are sure to
              catch your audience&apos;s attention.
            </p>
            <LoginButton btnStyle="btn btn-primary" text="GET STARTED" />
          </div>
        </div>
      </div>
      <div className="container justify-center items-center bg-base-200 mx-auto w-1/2 hidden lg:flex">
        <div className="container bg-base-200 mx-auto px-2">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={stake1}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={stake2}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={stake1}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={stake1}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={stake2}
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={stake1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
