import Container from "../../../UI/Container";
import Project from "./Project";
import "./Projects.scss";
import { useRef } from "react";

const projects = [
  {
    name: "Food Order-App",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    img: "/grilled-chicken-sandwich.jpg",
    href: "https://food-order-app-front.vercel.app/",
  },
  {
    name: "PlacePicker",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    img: "/forest-waterfall.jpg",
    href: "https://11-placepicker.vercel.app/",
  },
  {
    name: "Tic-Tac-Toe",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    img: "/game-logo.png",
    href: "https://07-tic-tac-toe-starting-project-phi.vercel.app/",
  },
  {
    name: "Quiz App",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    img: "/quiz-logo.png",
    href: "https://12-quiz-app.vercel.app/",
  },
  {
    name: "Count-down game",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    img: "/react.svg",
    href: "https://09-countdown-game.vercel.app/",
  },
  {
    name: "To-Do Project",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    img: "/no-projects.png",
    href: "https://10-to-do-challenge-proj.vercel.app/",
  },
];

export default function Projects({ moveToProjects }) {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    // Виклик методу scrollIntoView для переміщення до елементу з вказаним ref
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (moveToProjects) {
    scrollToTarget();
  }

  return (
    <section ref={targetRef} className="homepage__projects projects">
      <Container obj="projects">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid grid-projects">
          {projects.map((proj) => (
            <Project
              name={proj.name}
              key={proj.name}
              description={proj.description}
              img={proj.img}
              href={proj.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
