import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IProductAnimalProps {
  animal: IAnimal;
}

export const Productanimal = (props: IProductAnimalProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/animal/${props.animal.id}`);
  };

  return (
    <div className="animal" onClick={handleClick}>
      <h2>{props.animal.name}</h2>
      <img className="picpic" src={props.animal.imageUrl} alt="" />
    </div>
  );
};
