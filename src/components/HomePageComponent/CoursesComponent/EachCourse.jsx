import ViewCourse from "./ViewCourse"


import emojione_books from "../imagesHome/emojione_books.png"

const EachCourse = ({ courseTitle, rating }) => {
  return (
    <div className="home__each-course">
      <img className="home__course-book" src={emojione_books} alt="" />
      <h3 className="text-center home__each-course-heading">{courseTitle}</h3>
      <p className="home__each-course-paragraph">
        A Brief description of the subject is included here to give users an idea of what to expect.
      </p>
      <ViewCourse rating={rating} />
    </div>
  )
}

export default EachCourse