import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { time, timeStamp } from "console";
import { timingSafeEqual } from "crypto";
import { json } from "node:stream/consumers";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { idText } from "typescript";
import { IAnimal } from "../models/IAnimal";
import "./animal.scss";

export const Animal = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<IAnimal>();

  const [buttondisabled, setButtondisabled] = useState(false);

  useEffect(() => {
    async function oneAnimal() {
      let response = await axios.get(
        "https://animals.azurewebsites.net/api/animals/" + id
      );

      console.log(response.data);
      setAnimal(response.data);
    }

    if (animal) return;
    oneAnimal();

    // if (13.24){
    //   else {
    //     Date(2023-02-27)
    //   }
    // }
  });

  const Matadjuret = () => {
    localStorage.setItem(id as string, new Date().toString());
    setButtondisabled(true);
  };

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
        <img src={animal?.imageUrl} />
        <p className="shortdesc">{animal?.shortDescription}</p>
        <p className="longdesc">{animal?.longDescription}</p>
        <h4>Djur: {id}</h4>
        <button disabled={buttondisabled} onClick={Matadjuret}>
          Matadjuret
        </button>
      </div>
    </>
  );
};
