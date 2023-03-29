import DownloadBtn from "./OtherFooterComponents/DownloadBtn"
import HomeLogo from "../NavComponent/otherNavComponents/HomeLogo"

import AppleStore from "../imagesHome/AppleStore.png"
import PlayStore from "../imagesHome/PlayStore.png"

const Footer = () => {
  return (
    <footer>
      <HomeLogo />
      <DownloadBtn src={PlayStore} text="" store="Apple Store" />
      <DownloadBtn src={AppleStore} text="" store="Google Play" />
    </footer>
  )
}

export default Footer