import "../styles/App.scss";
import { Logo } from "./Logo";
import "../styles/Header.scss";
import { useNavigate } from "react-router";

export function Header() {

  let navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }

  return (
    <>
    <header className="header">
    <Logo goToAbout={goToAbout}/>
    </header>
    </>
  )
}