import { useParams } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();
  return <h1 className="text-2xl font-bold">Game Details for {id}</h1>;
};
export default GameDetails;
