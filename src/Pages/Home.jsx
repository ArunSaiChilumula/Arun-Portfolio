import '../CSS/Home.css'

const Home = ({ data }) => {


  if (!data) {
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
          <h1>{data.name}</h1>
          <p>{data.role}</p>
          <p>{data.location}</p>
          <p>{data.experience}</p>
          <p>{data.bio}</p>

          {data.summary.map((item, index) => (
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


    </div>
  )
}

export default Home
