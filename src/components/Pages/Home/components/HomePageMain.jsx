import img from "../../../../img/IMG_3291 (1).jpg";
import Container from "../../../UI/Container";
import "./HomePageMain.scss";

export default function HomePageMain() {
  return (
    <section className="homepage__main main">
      <Container obj="main">
        <div className="main__block block-main">
          <div className="block-main__left left-block-main">
            <div className="left-block-main__speciality">
              Frontend/Full-Stack Developer
            </div>
            <h1 className="left-block-main__title">
              Hello, my name is Dmytro Skorokhodov
            </h1>
            <p className="left-block-main__description">
              Short text with details about you, what you do or your professional career.
              You can add more information on the about page.
            </p>
            <div className="left-block-main__buttons buttons-main-block-left">
              <button className="buttons-main-block-left__button button">Projects</button>
              <button className="buttons-main-block-left__button button transparent-button">
                LinkedIn
              </button>
            </div>
          </div>
          <div className="block-main__image-ibg">
            <img src={img} alt="main_photo" />
          </div>
        </div>
      </Container>
    </section>
  );
}
