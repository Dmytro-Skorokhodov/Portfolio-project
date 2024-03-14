import "./Home.scss";
import About from "./components/Skills";
import HomePageMain from "./components/HomePageMain";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [moveToProjects, setMoveToProjects] = useState(false);

  function moveToProjectsHandler() {
    setMoveToProjects(true);
  }

  useEffect(() => {
    if (moveToProjects) {
      setMoveToProjects(false);
    }
  }, [moveToProjects]);

  return (
    <main className="homepage">
      <HomePageMain moveToProjects={moveToProjectsHandler} />
      <About />
      <Projects moveToProjects={moveToProjects} />
    </main>
  );
}
