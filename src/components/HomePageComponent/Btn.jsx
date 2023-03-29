import React from 'react'

const Btn = ({ text, type, link }) => {
  return (
    <div className="btn-wrap">
      {(type === "link") ? <a href={link} className='btn'>{text}</a> : <button className='btn'>{text}</button>}
    </div>
    
  )
}

export default Btn