import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Productanimal } from "../components/productanimal";
import { IAnimals } from "../models/IAnimals";
import { Animal } from "./animal";
import "./animals.scss";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimals[]>([]);

  useEffect(() => {
    async function oneAnimal() {
      let response = await axios.get(
        "https://animals.azurewebsites.net/api/animals"
      );

      console.log(response.data);
      setAnimals(response.data);
    }

    if (animals.length > 0) return;
    oneAnimal();
  });

  const html = animals.map((animal) => {
    return <Productanimal animal={animal} key={animal.id} />;
  });

  return (
    <>
      <header>
        <h1>The zoo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h2>{html}</h2>;
    </>
  );
};
