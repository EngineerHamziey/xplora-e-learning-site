import ViewCourse from "./ViewCourse"


import emojione_books from "../imagesHome/emojione_books.png"

const EachCourse = ({ courseTitle, rating, expectation }) => {
  return (
    <div className="home__each-course">
      <img className="home__course-book" src={emojione_books} alt=""/>
      <h3 className="home__heading text-center home__each-course-heading">
        {courseTitle}
      </h3>
      <p className="home__each-course-paragraph">
        {expectation}
      </p>
      <ViewCourse rating={rating}/>
    </div>
  )
}

export default EachCourse