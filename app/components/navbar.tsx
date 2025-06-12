import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">home</Link>
        <Link to="/posts">posts</Link>
      </div>
    </div>
  );
}

export default Navbar;
