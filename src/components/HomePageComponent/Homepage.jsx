import Nav from "./NavComponent/Nav"
import Btn from "./Btn"
import Courses from "./Courses"
import Features from "./FeaturesComponent/Features"
import Reviews from "./reviewComponent/Reviews"
import Footer from "./FooterComponent/Footer"

import homePageHeroMobile from "./imagesHome/homePageHeroMobile.png"
import coilPointionArrow from "./imagesHome/coilPointionArrow.png"
import theWholeChart from "./imagesHome/theWholeChart.png"


const Homepage = () => {
  return (
    <>
      <Nav />
      <h1>Learn from the <span className="higlighted">Comfort</span> of Your Home.</h1>
      <p>An hero text is to be included here which summarizes the function of the products and its advantages to the users.</p>
      <Btn link="#" type="link" text="Start Learning" />
      <Btn link="#" type="link" text="Learn More" />
      <img src={coilPointionArrow} alt="" />
      <img src={homePageHeroMobile} alt="" />
      <h2>Browse Our Popular Subjects</h2>
      <p>
        A follow-up text giving the user more insights on the courses/subjects offered
      </p>
      <Courses />
      <h4>Learning with others makes it more fun.</h4>
      <img src={theWholeChart} alt="" />
      <Features />
      <Reviews />
      <Footer />
    </>
  )
}

export default Homepage