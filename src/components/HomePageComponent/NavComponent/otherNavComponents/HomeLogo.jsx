
import homeDotLogo from "../../imagesHome/homeDotLogo.png"

const HomeLogo = () => {
  return (
    <a href="#" className="nav__home-logo-wrap">
      <div className="nav__dot-logo-wrap">
        <img className="nav__dot-logo" src={homeDotLogo} alt="" />
      </div>
      <p className="nav__logo-text">
        Xplora
      </p>
    </a>
  )
}

export default HomeLogo