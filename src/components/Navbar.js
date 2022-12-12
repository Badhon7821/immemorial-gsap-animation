import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapStraggerDown } from "../hooks/Gsap";
import { useGsapStraggerUp } from "../hooks/Gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [favRef];
  const logoArr = [logoRef];
  useGsapStraggerDown(favArr, 0);
  useGsapStraggerDown(liArr, 0.2);
  useGsapStraggerUp(logoArr, 0.5);

  return (
    <nav className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="/featured">Featured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <h2>
          <Link to="/">Immemorial</Link>
        </h2>
      </div>
      <div className="favourite-link" ref={favRef}>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
