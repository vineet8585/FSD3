import car from './img/scene1.jpg'

function App() {
  const student = {
    name: "Vineet Sharma",
    course: "B.Tech CSE",
    college: "ABES Engineering College",
    rollNo: "250032010021",
    year: "3rd Year",
    section: "CSE-13"
  }

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        border: "2px solid black",
        textAlign: "center"
      }}
    >

      <div
        style={{
          backgroundColor: "red",
          padding: "10px"
        }}
      >
        <h2>ABES Engineering College</h2>
        <p>Student Identity Card</p>
      </div>

      <div
        style={{
          padding: "20px"
        }}
      >

        <img
          src={car}
          alt="Student"
          style={{
            width: "120px",
            height: "120px"
          }}
        />

       
        <h2
          style={{
            backgroundColor: "brown"
          }}
        >
          {student.name}
        </h2>

        <p><b>Course:</b> {student.course}</p>
        <p><b>Roll No:</b> {student.rollNo}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Section:</b> {student.section}</p>

      </div>

      <p>{student.college}</p>

    </div>
  )
}

export default App