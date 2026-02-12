import Header from "../Header/Header";
import Hotels from "../Hotels/Hotels";
import Menu from "../Menu/Menu";
import "./App.css";
import { useState } from "react";

function App() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Pod akacjami",
      city: "Warszawa",   // <-- must be a string in quotes
      rating: "8,5",
      description: "lorem ipsum fasdfasdf",
      image: "https://picsum.photos/id/237/300/200",
    },
    {
      id: 2,
      name: "Deboowy",
      city: "Lublin",
      rating: "8,0",
      description:
        "lorem ipsum fasdfsdfasddddddddddddddddddddddddfasdf",
      image: "https://picsum.photos/id/238/300/200",
    },
  ]);

  return (
    <>
      <Header />
      <Menu />
      <Hotels hotels={hotels} />
    </>
  );
}

export default App;

