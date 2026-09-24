import Icard from "./Icard";
import car from "../img/scene1.jpg";

function ICardGallery() {

  const student = [
    {
      name: "Vineet",
      age: 20,
      college: "ABES Engineering College",
      img: car
    },
    {
      name: "Ram",
      age: 21,
      college: "IIT Delhi",
      img: car
    },
    {
      name: "Raj",
      age: 20,
      college: "AKTU",
      img: car
    }
  ];

  return (
    <div style={{display:'flex'}}>
      {student.map((data) => (
        <Icard {...data} />
      ))}
    </div>
  );
}

export default ICardGallery;