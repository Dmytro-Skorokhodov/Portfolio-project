
import Container from "../UI/Container";
import "./Header.scss";
import NavBar from "./NavBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header({ onBurgerClick }) {
  const [iconIsClicked, setIconIsClicked] = useState(false);
  function clickHandler() {
    setIconIsClicked((prevValue) => !prevValue);
    onBurgerClick();
  }

  return (   
    <header className="header">
      <Container obj="header" iconClicked={iconIsClicked}>
        <h3 className="header__name">Skorokhodov Dmytro</h3>
        <NavBar onClick={clickHandler}/>
      </Container>
    </header>
  );
}
