import React from 'react'
import parse from 'html-react-parser'

const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className='resume-item'>
      <div className="resume-icon">{icon}</div>
      <div className="resume-date">{year}</div>
      <h3 className="resume-subtitle">{parse(title)}</h3>
      <p className="resume-description">{desc}</p>
      </div>
  )
}

export default ResumeItem