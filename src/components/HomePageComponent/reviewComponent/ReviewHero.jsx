import React from 'react'

const ReviewHero = ({ img, userName }) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{userName}</p>
    </div>
  )
}

export default ReviewHero