import Btn from "../../Btn"
import LinkWithIcons from "../../LinkWithIcons"

import linkedlnLogo from "../../imagesHome/linkedlnLogo.png"
import darkTwitterLogo from "../../imagesHome/darkTwitterLogo.png"
import GitHubLogo from "../../imagesHome/GitHubLogo.png"
import instagramLogo from "../../imagesHome/instagramLogo.png"

const FooterFoot = () => {
  return (
    <div className="footer__foot">
      <div className="">
        <Btn className="footer__links" link="#" type="link" text="Terms" />
        <Btn className="footer__links" link="#" type="link" text="Privacy" />
        <Btn className="footer__links" link="#" type="link" text="Cookies" />
      </div>
      <div className="footer__socials--devoloper">
        <h6>Frontend Web Developer's Contact:</h6>
        <LinkWithIcons alt="Visit Developer's Linkedln" link="#" src={linkedlnLogo} />
        <LinkWithIcons alt="Visit Developer's Twitter" link="#" src={darkTwitterLogo} />
        <LinkWithIcons alt="Visit Developer's GitHub" link="#" src={GitHubLogo} />
        <LinkWithIcons alt="Visit Developer's Instagram" link="#" src={instagramLogo} />
      </div>
      <div className="footer__socials--ui-ux-designer">
        <h6>UI/UX designer's Contact:</h6>
        <LinkWithIcons alt="Visit UI/UX designer's Linkedln" link="#" src={linkedlnLogo} />
        <LinkWithIcons alt="Visit UI/UX designer's Twitter" link="#" src={darkTwitterLogo} />
        <LinkWithIcons alt="Visit UI/UX designer's GitHub" link="#" src={GitHubLogo} />
        <LinkWithIcons alt="Visit UI/UX designer's Instagram" link="#" src={instagramLogo} />
      </div>
    </div>
  )
}

export default FooterFoot