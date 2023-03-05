import axios from "axios";
import { useEffect, useState } from "react";
import "./animal.scss";

import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

function Animal() {
  const [isFed, setIsFed] = useState(false);
  // const [fedTime, setFedTime] = useState<IAnimal | null>(null);
  const [animal, setAnimal] = useState<IAnimal>();

  let { id } = useParams();

  useEffect(() => {
    async function oneAnimal() {
      let response = await axios.get(
        "https://animals.azurewebsites.net/api/animals/" + id
      );

      setAnimal(response.data);

      const storedTime = localStorage.getItem(`${id}`);
      if (storedTime === null) {
      } else {
        checkIfNeedsFood(storedTime);
      }
    }
    if (isFed) return;
    oneAnimal();
  }, []);

  function checkIfNeedsFood(lastFed: string) {
    const lastFedDate = new Date(lastFed);
    const rightNow = new Date();

    if (lastFedDate.getHours() + 3 < rightNow.getHours()) {
      setIsFed(false);
    } else {
      setIsFed(true);
    }
  }

  function feedAnimal() {
    setIsFed(true);

    localStorage.setItem(`${id}`, new Date().toString());
    console.log(`animal-${id}-feed`);
  }

  return (
    <>
      <header>
        <h1 className="text">The zoo</h1>
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
      <div className="djurlayout">
        <h1>{animal?.name}</h1>
        <img src={animal?.imageUrl} alt={animal?.name} />
        <p className="shortdesc">{animal?.shortDescription}</p>
        <p className="longdesc">{animal?.longDescription}</p>
        <h4>Djur: {animal?.id}</h4>
        <button onClick={feedAnimal} disabled={isFed}>
          Mata
        </button>
      </div>
    </>
  );
}

export default Animal;
