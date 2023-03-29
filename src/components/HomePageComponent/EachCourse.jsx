import ViewCourse from "./reviewComponent/ViewCourse"


import emojione_books from "./imagesHome/emojione_books.png"

const EachCourse = ({ courseTitle, rating }) => {
  return (
    <div>
      <h3>{courseTitle}</h3>
      <p>
        A Brief description of the subject is included here to give users an idea of what to expect.
      </p>
      <img src={emojione_books} alt="" />
      <ViewCourse rating={rating} />
    </div>
  )
}

export default EachCourse