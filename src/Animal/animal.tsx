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

      // Check on load of component, if animal is fed
      const storedTime = localStorage.getItem("animal-1-feed"); // TODO: Same ID all the time now
      if (storedTime === null) {
        // Animal has never been fed
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

    // TODO - Handle if day has changed too
    // tip: https://bfy.tw/TsVk
    if (lastFedDate.getHours() + 3 < rightNow.getHours()) {
      // Time to feed again
      setIsFed(false);
    } else {
      setIsFed(true);
    }
  }

  function feedAnimal() {
    setIsFed(true);
    localStorage.setItem("animal-1-feed", new Date().toString()); // TODO: Same ID all the time now
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
