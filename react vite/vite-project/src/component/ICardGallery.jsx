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
      name: "Rahul",
      age: 21,
      college: "IIT Delhi",
      img: car
    },
    {
      name: "Aman",
      age: 20,
      college: "AKTU",
      img: car
    }
  ];

  return (
    <div>
      {student.map((data) => (
        <Icard {...data} />
      ))}
    </div>
  );
}

export default ICardGallery;