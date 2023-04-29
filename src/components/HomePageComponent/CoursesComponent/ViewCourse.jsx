import Btn from "../Btn"

import yellowStar from "../imagesHome/yellowStar.png"

const ViewCourse = ({ rating }) => {
  return (
    <div className="home__rating-view-course">
      <div className="home__rating">
        <p>{rating}</p>
        <img className="home__rating-img" src={yellowStar} alt="" />
      </div>
      <Btn className="btn__viewcourse" type="link" link="#" text="View Course" />
    </div>
  )
}

export default ViewCourse