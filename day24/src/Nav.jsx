import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="middleNav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Nav;
