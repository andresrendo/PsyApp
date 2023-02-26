import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TopNav from "./components/navbar/TopNav.jsx";
import "./App.css";
import DoctorCard from "./components/DoctorCard/DoctorCard";
import Carrusel from "./components/carousel/carousel.jsx";

function App() {
  // const [count, setCount] = useState(0)

  const doctors = [
    {
      name: "Alejandra Millan",
      rating: 9,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos et consequuntur fugit. Quo quisquam est id consectetur vitae earum",
      image:
        "https://images.unsplash.com/photo-1616480461419-8e1b5e1b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },

    {
      name: "Alejandra Millan",
      rating: 9,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos et consequuntur fugit. Quo quisquam est id consectetur vitae earum",
      image:
        "https://images.unsplash.com/photo-1616480461419-8e1b5e1b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  return (
    <div className="PsyApp">
      <div>
        <TopNav />
      </div>
    </div>
  );
}

export default App;
