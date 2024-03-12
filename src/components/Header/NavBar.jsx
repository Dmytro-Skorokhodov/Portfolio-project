import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar({ onClick }) {
  // function closeMenuHandler() {
  //   if (window.innerWidth < 767.98) {
  //     onCloseMenu();
  //   }
  // }

  return (
    <nav className="header__menu menu-header">
      <ul className="menu-header__list list-menu-header">
        <li className="list-menu-header__item">
          <a href="" className="list-menu-header__link">
            About
          </a>
        </li>
        <li className="list-menu-header__item">
          <a href="" className="list-menu-header__link">
            Projects
          </a>
        </li>
        <li className="list-menu-header__item">
          <a href="" className="list-menu-header__link">
            Contacts
          </a>
        </li>
      </ul>
      <button onClick={() => onClick()} className="icon-menu header__burger-button">
        <span></span>
      </button>
    </nav>
  );
}
