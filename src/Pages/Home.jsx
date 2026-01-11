import '../CSS/Home.css'
import Skills from '../Components/Skills.jsx'
import Projects from '../Components/Projects.jsx'
import Contact from '../Components/Contact.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {


   const [data, setData] = useState({})
   useEffect(() => {
     const fetchData = async () => {
       const response = await axios.get('/data.json')
       setData(response.data)
     }
     fetchData()
   }, [])


    if (!data || Object.keys(data).length === 0) {
      return (
        <div className="LoadingWrapper">
          <div className="LoadingAnimation"></div>
          <p className="LoadingText">Loading data...</p>
        </div>
      )
    }

  return (
    <div>
      {/* ================= HOME ================= */}
      <section id="home" className="HomeContainer">
        <div className="HomeContent">
          <h1>{data?.aboutMe?.name}</h1>
          <p>{data?.aboutMe?.role}</p>
          <p>{data?.aboutMe?.location}</p>
          <p>{data?.aboutMe?.experience}</p>
          <p>{data?.aboutMe?.bio}</p>
          {data?.aboutMe?.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          <div className="HomeButtons">
            <a href="../assets/ArunSaiCV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="ResumeButton">Download Resume</button>
            </a>
          </div>
        </div>

        <img src="../assets/ProfilePhoto.png" alt="Profile" />
      </section>
      <Skills data={data?.aboutMe?.skills} />
      <Projects projects={data?.projects} />
      <Contact />
    </div>
  )
}

export default Home
