import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar">
      <Link to={"/"} className="navbar-item">
        Home
      </Link>
    </nav>
  );
}
