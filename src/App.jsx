import './App.css'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import Skills from './Pages/Skills.jsx'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Footer from './Components/Footer.jsx'

function App() {

    const [data, setData] = useState({})
       useEffect(() => {
         const fetchData = async () => {
             const response = await axios.get('/data.json')
             setData(response.data)
         }
         fetchData()
       }, [])

  return (
    <>
      <Navbar />

      <Home data={data?.aboutMe} />
      <Skills data={data?.aboutMe?.skills} />
      <Projects projects={data?.projects} />
      <Contact />

      <Footer />
    </>
  )
}

export default App
