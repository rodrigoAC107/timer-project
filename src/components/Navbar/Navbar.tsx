import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar__item-wrapper">
        <li className="navbar__item">
          <NavLink
            className={({ isActive }) =>
              `navbar_link ${isActive && "navbar__link__active"}`
            }
            to="/countdown"
          >
            Countdown
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className={({ isActive }) =>
              `navbar_link ${isActive && "navbar__link__active"}`
            }
            to="/timer"
          >
            Timer
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
