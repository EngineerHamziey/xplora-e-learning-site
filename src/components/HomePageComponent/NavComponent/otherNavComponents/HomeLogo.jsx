
import homeDotLogo from "../../imagesHome/homeDotLogo.png"

const HomeLogo = () => {
  return (
    <div className="nav__home-logo-wrap">
      <div className="nav__dot-logo-wrap">
        <img className="nav__dot-logo" src={homeDotLogo} alt="" />
      </div>
      <div className="nav__logo-name">
        Xplora
      </div>
    </div>
  )
}

export default HomeLogo