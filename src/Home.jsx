import { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import LoginButton from './LoginButton';
import collage from './assets/collage.png';
import HomeAuthenticated from './HomeAuthenticated';

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const [prompt, setPrompt] = useState('');
  const [creditError, setCreditError] = useState('');
  const [inputError, setInputError] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [imageURL, setImage] = useState([]);
  const [imageNumber, setImageNumber] = useState(1);

  const { data, refetch } = useQuery({
    queryKey: ['myUser'],
    queryFn: () =>
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/getUser`, {
          customer_email: user.email,
        })
        .then((res) => res.data),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  const handleImageSize = (e) => {
    setImageSize(e.target.value);
  };

  const createImg = async () => {
    let cost;

    if (imageSize === '1024x1024') {
      cost = 1.1 * imageNumber;
    } else {
      cost = 1 * imageNumber;
    }

    if (!imageSize || prompt.trim().length === 0) {
      setCreditError('');
      setInputError('Image size and Prompt must be specified');
    } else if (Math.floor(data.credits * 10) / 10 < cost) {
      setInputError('');
      setCreditError('Not Enough Credits');
    } else {
      setInputError('');
      setCreditError('');
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/create`,
        {
          prompt,
          imageSize,
          imageNumber,
          email: user.email,
        },
      );
      setImage(response.data);
      refetch();
    }
  };

  if (isAuthenticated) {
    return (
      <HomeAuthenticated
        imageURL={imageURL}
        handlePrompt={handlePrompt}
        handleImageSize={handleImageSize}
        createImg={createImg}
        prompt={prompt}
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
        imageSize={imageSize}
        inputError={inputError}
        creditError={creditError}
      />
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center bg-base-200 min-h-screen lg:min-h-0">
      <div className="hero lg:min-h-screen lg:w-1/2 bg-base-200 my-8 lg:my-0">
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
      <div className="justify-center items-center bg-base-200 my-8 lg:my-0 w-full lg:w-1/2 flex">
        <div className="w-3/4 lg:w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={collage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
