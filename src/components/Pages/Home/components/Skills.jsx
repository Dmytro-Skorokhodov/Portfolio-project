import Container from "../../../UI/Container";
import SkillsBlock from "./SkillsBlock";
import "./Skills.scss";

export default function Skills() {
  return (
    <section className="homepage__skills skills">
      <Container obj="skills">
        <div className="skills__title title">Skills</div>
        <ul className="skills__blocks blocks-skills">
          <SkillsBlock />
          <SkillsBlock />
          <SkillsBlock />
          <SkillsBlock />
          <SkillsBlock />
          <SkillsBlock />
        </ul>
      </Container>
    </section>
  );
}
