import ReviewHero from "./ReviewHero"

const EachReview = ({ userName, img }) => {
  return (
    <div>
      <p className="review__statement">
        Xplora is enjoyable and simple to use. It has been a huge assistance to me as a homeschooler. I can learn new things from the comfort of my own home.
      </p>
      <ReviewHero img={img} userName={userName} />
    </div>
  )
}

export default EachReview