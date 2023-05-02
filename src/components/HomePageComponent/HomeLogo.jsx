
import homeDotLogo from "./imagesHome/homeDotLogo.png"

const HomeLogo = ({className}) => {
  return (
    <a href="#" className={"nav__home-logo-wrap " + className}>
      <div className="nav__dot-logo-wrap">
        <img className="nav__dot-logo" src={homeDotLogo} alt="" />
      </div>
      <span className="nav__logo-text">
        Xplora
      </span>
    </a>
  )
}

export default HomeLogo