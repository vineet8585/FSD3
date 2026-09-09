import './App.css'
import profileImg from './img/scene.jpg'

function App() {
  const student = {
    name: "Vineet Sharma",
    course: "B.Tech CSE",
    college: "ABES Engineering College",
    rollNo: "2500320109021",
    year: "3rd Year",
    section: "CSE-13"
  }

  return (
    <div className="id-card">
      
      <div className="card-header">
        <h2>ABES Engineering College</h2>
        <p>Student Identity Card</p>
      </div>

      <div className="card-body">
        <img
          src={profileImg}
          alt="Student"
          className="profile-img"
        />

        <h2>{student.name}</h2>

        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Roll No:</strong> {student.rollNo}</p>
        <p><strong>Year:</strong> {student.year}</p>
        <p><strong>Section:</strong> {student.section}</p>
      </div>

      <div className="card-footer">
        <p>{student.college}</p>
      </div>

    </div>
  )
}

export default App