export default function Wrapper({ children, onBurgerClicked }) {
  return (
    <div className={`wrapper ${onBurgerClicked ? "menu-open" : ""}`}>{children}</div>
  );
}
