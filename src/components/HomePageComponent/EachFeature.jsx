import React from 'react'

const EachFeature = ({ logo, head, text }) => {
  return (
    <div>
      <img src={logo} alt="" />
      <h5>{head}</h5>
      <p>{text}</p>
    </div>
  )
}

export default EachFeature