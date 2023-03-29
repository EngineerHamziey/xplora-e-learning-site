import Btn from "../Btn"

import yellowStar from "../imagesHome/yellowStar.png"

const ViewCourse = ({ rating }) => {
  return (
    <div>
      <div className="rating">
        <p>{rating}</p>
        <img src={yellowStar} alt="" />
      </div>
      <Btn type="link" link="#" text="View Course" />
    </div>
  )
}

export default ViewCourse