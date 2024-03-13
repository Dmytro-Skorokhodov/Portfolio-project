import img from "../../../../img/IMG_3291 (1).jpg";
import Container from "../../../UI/Container";
import "./HomePageMain.scss";
import { useInView } from "react-intersection-observer";

export default function HomePageMain({ moveToProjects }) {
  const isMobile = window.innerWidth < 767.98 ? true : false;
  const [ref, inView] = useInView({
    triggerOnce: true, // Зробить виклик функції зміни видимості тільки один раз
    threshold: 0.5, // Визначте, скільки відсотків елементу повинно бути видимим для виклику функції
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: true, // Зробить виклик функції зміни видимості тільки один раз
    threshold: 0.5, // Визначте, скільки відсотків елементу повинно бути видимим для виклику функції
  });
  return (
    <section className="homepage__main main">
      <Container obj="main">
        <div className="main__block block-main">
          <div
            ref={ref}
            className={`block-main__left left-block-main ${inView ? "fade-in" : ""}`}>
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
              <button
                onClick={() => moveToProjects()}
                className="buttons-main-block-left__button button">
                Projects
              </button>
              <a
                className="buttons-main-block-left__button button transparent-button"
                href="https://www.linkedin.com/in/dmytro-skorokhodov-1772262a7"
                target="_blank"
                rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div
            ref={imageRef}
            className={`block-main__image-ibg ${
              !isMobile ? (imageInView ? "fade-in" : "") : ""
            }`}>
            <img src={img} alt="main_photo" />
          </div>
        </div>
      </Container>
    </section>
  );
}
