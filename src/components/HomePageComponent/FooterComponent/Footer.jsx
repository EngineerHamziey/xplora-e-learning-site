import DownloadBtn from "./OtherFooterComponents/DownloadBtn"
import HomeLogo from "../HomeLogo"
import FooterFoot from "./OtherFooterComponents/FooterFoot"
import FooterLinks from "./OtherFooterComponents/FooterLinks"
import FooterCommunity from "./OtherFooterComponents/FooterCommunity"
import FooterResources from "./OtherFooterComponents/FooterResources"
import Btn from "../Btn"

import AppleStore from "../imagesHome/AppleStore.png"
import PlayStore from "../imagesHome/PlayStore.png"

const Footer = () => {
  return (
    <footer className="footer">
      <HomeLogo className="footer--home-logo" />
      <div className="footer__btn--download-container">
        <DownloadBtn src={AppleStore} text="" store="Google Play" />
        <DownloadBtn src={PlayStore} text="" store="Apple Store" />
      </div>
      <FooterLinks />
      <FooterCommunity />
      <FooterResources />
      <Btn type="link" link="#top" text="Return to Top" />
      <FooterFoot />
    </footer>
  )
}

export default Footer