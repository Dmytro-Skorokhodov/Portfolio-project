import "./Home.scss";
import HomePageMain from "./components/HomePageMain";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="homepage">
      <HomePageMain />
      <Projects />
    </main>
  );
}
