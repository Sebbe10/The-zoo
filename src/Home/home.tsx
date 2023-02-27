import { Link } from "react-router-dom";
import "./home.scss";

export const Home = () => {
  return (
    <>
      <header>
        <h1>The zoo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
