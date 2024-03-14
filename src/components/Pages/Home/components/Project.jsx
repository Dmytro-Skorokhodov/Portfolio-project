import "./Project.scss";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export default function Project({ name = "", description, img, href }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Зробить виклик функції зміни видимості тільки один раз
    threshold: 0.5, // Визначте, скільки відсотків елементу повинно бути видимим для виклику функції
    rootMargin: "100px",
  });
  return (
    <a
      href={href}
      ref={ref}
      target="_blank"
      className={`grid-projects__project project ${inView ? "fade-in" : ""}`}>
      <div className="project__block block-project">
        <h3 className="block-project__name">{name}</h3>
        <p className="block-project__description">
          I created this personal project in order to show how to create an interface in
          Figma using a portfolio as an example.
        </p>
        <button className="block-project__button button">
          <a href={href} target="_blank">
            View Project
          </a>
        </button>
      </div>
      <div className="project__image-ibg">
        <img src={img} alt={name} />
      </div>
    </a>
  );
}
