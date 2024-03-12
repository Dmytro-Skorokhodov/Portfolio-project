import "./Project.scss";

export default function Project({ name = "", description, img, href }) {
  return (
    <a href={href} className="grid-projects__project project">
      <div className="project__block block-project">
        <h3 className="block-project__name">{name}</h3>
        <p className="block-project__description">
          I created this personal project in order to show how to create an interface in
          Figma using a portfolio as an example.
        </p>
        <button className="block-project__button button">
          <a href={href}>View Project</a>
        </button>
      </div>
      <div className="project__image-ibg">
        <img src={img} alt={name} />
      </div>
    </a>
  );
}
