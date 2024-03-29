import style from "./Header.module.css";
import Logo from "../../sharedComponents/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import IconPages from "./IconPages/IconPages";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <div style={{ width: "471px" }}>
          <Navigation menuList={[2, 3, 4]} />
        </div>
        <Logo color="#D6822A" />
        <div style={{ width: "380px" }}>
          <Navigation menuList={[6, 9, 7]} />
        </div>
        <IconPages />
      </div>
    </header>
  );
}

export default Header;
