import Header from "./components/Header/Header";
import Wrapper from "./components/UI/Wrapper";
import Footer from "./components/Footer/Footer";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Pages/Home/Home";

function App() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  function burgerClickHandler() {
    setBurgerClicked((prevValue) => !prevValue);
  }

  return (
    <Wrapper onBurgerClicked={burgerClicked}>
      <Header onBurgerClick={burgerClickHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
