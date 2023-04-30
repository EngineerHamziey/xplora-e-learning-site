import Nav from "./NavComponent/Nav"
import Btn from "./Btn"
import Courses from "./CoursesComponent/Courses"
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
      <div className="home__content-not-nav">
        <div className="home__content-not-nav--wrapper">
          <h1 className="home__heading home__heading--one">Learn from the <span className="higlighted">Comfort</span> of Your Home.</h1>
          <p className="home__hero-text">
            Empower your mind with our learning platform. Unlock your potential, gain new skills and explore endless possibilities or personal and professional growth.
          </p>
          <div className="home__btn-and-hero-wrapper">
            <div className="btn--hero-wrapper">
              <Btn className="btn--hero btn--purple btn--shadow" link="#" type="link" text="Start Learning" />
              <Btn className="btn--hero btn--light-purple btn--shadow" link="#" type="link" text="Learn More" />
            </div>
            <div className="home__hero-and-arrow">
              <div className="home__arrow-wrapper">
                <img className="home__arrow" src={coilPointionArrow} alt="" />
              </div>
              <img className="home__hero" src={homePageHeroMobile} alt="Picture of a student" />
            </div>
          </div>
          <h2 className="home__heading home__heading--two text-center">Browse Our Popular Subjects</h2>
          <p className="text-center">
            Master new skills in less time with our condensed approach and Learn from industry leaders.
          </p>
          <Courses />
          <div className="home__chart-section">
            <h3 className="home__heading home__heading--three text-center">Learning with others makes it more fun.</h3>
            <img className="home__chart-img" src={theWholeChart} alt="" />
          </div>
          <Features />
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Homepage