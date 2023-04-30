import Btn from "../Btn"

import yellowStar from "../imagesHome/yellowStar.png"

const ViewCourse = ({ rating }) => {
  return (
    <div className="home__rating-view-course">
      <div className="home__rating">
        <p className="home__rating-text">{rating}</p>
        <img className="home__rating-img" src={yellowStar} alt="" />
      </div>
      <Btn className="btn__viewcourse btn--shadow btn--light-purple btn--view-course" type="link" link="#" text="View Course" />
    </div>
  )
}

export default ViewCourse