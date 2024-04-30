import React from 'react'
import Info from '../../components/Info.jsx'
import Stats from '../../components/Stats.jsx'
import { FaDownload } from 'react-icons/fa'
import CV from "../../assets/CV.pdf"
import '../about/about.css'
import Skills from '../../components/Skills.jsx'
import { resume } from '../../data.jsx'
import ResumeItem from '../../components/ResumeItem.jsx'
function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>
            <ul className="info-list grid">
              <Info />
            </ul>
            <a href={CV} download='' className="button">Dowanload CV 
            <span className="button-icon">
              <FaDownload/>
              </span>
              </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>
      <section className='skills'>
        <h3 className="section-subtitle subtitle-center">My Skills</h3>
        <div className="skills-container grid">
          <Skills />
        </div>
      </section>
      <section className="resume">
        <h3 className="section-subtitle subtitle-center">Experience & Education
        </h3>
        <div className="resume-container grid">
          <div className="resume-data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val} />
              }
            })}
              <div className="resume-data">
              {resume.map((val) => {
                if (val.category === 'education') {
                  return <ResumeItem key={val.id} {...val} />
                }
              })}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default About