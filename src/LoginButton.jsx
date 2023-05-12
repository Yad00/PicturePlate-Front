import { useAuth0 } from '@auth0/auth0-react';

// eslint-disable-next-line react/prop-types
const LoginButton = ({ btnStyle, text }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className={btnStyle} onClick={() => loginWithRedirect()}>
      {text}
    </button>
  );
};

export default LoginButton;
