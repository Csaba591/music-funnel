import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar has-background-light">
      <div className="container">
        <Link to={"/"} className="navbar-item">
          Home
        </Link>
      </div>
    </nav>
  );
}
