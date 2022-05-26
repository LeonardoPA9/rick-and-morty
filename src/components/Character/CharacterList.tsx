import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext";
import { CharacterData } from "../../types/Types";
import { routerRoutes } from "../../utils/Routes";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { charactersByEpisode, character, loading } =
    useContext(CharacterContext);
  const { pathname } = useLocation();
  const characterList: CharacterData[] = (
    routerRoutes.HOME === pathname ? character?.results : charactersByEpisode
  ) as CharacterData[];

  if (loading) {
    return <p>loading...</p>;
  }

  if (!characterList?.length) {
    return <p>No matching results...</p>;
  }

  return (
    <div className="row">
      {characterList?.map((character) => (
        <CharacterCard key={character?.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
