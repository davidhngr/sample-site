export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>

        <ul className="nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>

        <div className="button-container">
          <button className="button-small-outlined">Login</button>
          <button className="button-small-filled">Free trial</button>
        </div>
      </div>
    </nav>
  );
}
