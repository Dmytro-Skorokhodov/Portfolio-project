export default function Container({ obj, children, iconClicked }) {
  return (
    <div className={`${obj}__container ${iconClicked ? "menu-open" : ""}`}>
      {children}
    </div>
  );
}
