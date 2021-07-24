import { useContext } from "react";
import { isLoggedIn } from "./loggedContext";

const Home = ({ handleClick }) => {
  const user = useContext(isLoggedIn);
  return (
    <div>
      Welcome to Home
      <br></br>
      <button onClick={() => handleClick((s) => !s)}>
        {user ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Home;
