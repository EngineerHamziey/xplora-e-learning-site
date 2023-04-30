import React from 'react'

const ReviewHero = ({ img, userName }) => {
  return (
    <div className="home__review--hero">
      <img className='home__review--hero-img' src={img} alt="" />
      <p className='home__heading home__review--hero-name'>{userName}</p>
    </div>
  )
}

export default ReviewHero