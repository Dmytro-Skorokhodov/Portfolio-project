import { NavLink } from "react-router-dom";


export default function Logo({ obj,onCloseMenu }) {
  return (
    <NavLink to="/" onClick={onCloseMenu} className={`logo ${obj}__logo`}>
      <img src="" alt="logotype" />
    </NavLink>
  );
}
