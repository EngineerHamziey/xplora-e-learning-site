
const EachFeature = ({ logo, head, text }) => {
  return (
    <div className="home__each-features">
      <img className="home__each-features-icons" src={logo} alt="" />
      <h5 className="home__heading home__each-features-heading">{head}</h5>
      <p className="home__each-features-description">{text}</p>
    </div>
  )
}

export default EachFeature