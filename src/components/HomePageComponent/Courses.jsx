import EachCourse from "./EachCourse"
import Btn from "./Btn"

const Courses = () => {
  return (
    <div className='courses'>
      <EachCourse rating="4.9" courseTitle="Anatomy" />
      <EachCourse rating="4.7" courseTitle="Literature" />
      <EachCourse rating="5.0" courseTitle="Government" />
      <Btn type="link" link="#" text="Get Started — for free" />
    </div>
  )
}

export default Courses