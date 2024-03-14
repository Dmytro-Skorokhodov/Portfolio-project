import "./SkillsBlock.scss";

export default function AboutBlock() {
  return (
    <li className="block-skills__block block-skills">
      <h3 className="block-skills__title">Title</h3>
      <p className="block-skills__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique impedit
        repellendus ipsam nobis non saepe ullam quam optio labore, nesciunt perferendis
        aut odio possimus placeat voluptas quisquam veniam adipisci provident!
      </p>
      <div className="block-skills__level level-block-skills">
        <span className="level-block-skills__line"></span>
        <div className="level-block-skills__percentage">15%</div>
      </div>
    </li>
  );
}
