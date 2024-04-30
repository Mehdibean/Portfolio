import React from 'react'
import { personalInfo } from '../data'


function info() {
  return (
    <>
      {personalInfo.map(({title, description}, index) => {
        return (
          <li className="info-item" key={index}>
<span className="info__title">{title}</span>
<span className="info__description">{description}</span>

          </li>
        )
      })}
    </>
  )
}

export default info