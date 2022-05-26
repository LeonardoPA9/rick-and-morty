import axios from "axios";
import { ChangeEvent, createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Character, EpisodeData } from "../types/Types";
import { queryConstructor } from "../utils/Filters";
import { routerRoutes } from "../utils/Routes";

interface CharacterContextTypes {
  character: Character | null;
  currentQuery: string;
  characterSearch: string;
  charactersByEpisode: CharacterData[];
  episodeData: EpisodeData | undefined;
  episodeNumber: number;
  setEpisodeNumber: (number: number) => void;
  fetchCharacters: (url?: string, query?: string) => void;
  fetchFilteredCharacters: (type: string, value: string) => void;
  resetFilters: () => void;
  handleCharacterSearch: (evt: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const CharacterContext = createContext<CharacterContextTypes>({
  character: null,
  currentQuery: "",
  characterSearch: "",
  episodeData: undefined,
  charactersByEpisode: [],
  episodeNumber: 1,
  setEpisodeNumber: (number) => {},
  fetchCharacters: (url?, query?) => {},
  fetchFilteredCharacters: (type, value) => {},
  resetFilters: () => {},
  handleCharacterSearch: (evt) => {},
  loading: false,
});

interface Provider {
  children: any;
}

const CharacterProvider = ({ children }: Provider) => {
  const [characterSearch, setCharacterSearch] = useState<string>("");
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodeData, setEpisodeData] = useState<EpisodeData | undefined>(
    undefined
  );
  const [charactersByEpisode, setCharactersByEpisode] = useState<
    CharacterData[]
  >([]);
  const [episodeNumber, setEpisodeNumber] = useState<number>(1);
  const [currentQuery, setCurrentQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === routerRoutes.HOME;
  const BASE_URL = `https://rickandmortyapi.com/api/${
    isHome ? "character" : `episode/${episodeNumber}`
  }`;

  useEffect(() => {
    fetchCharacters("", currentQuery);
  }, [currentQuery, BASE_URL]);

  const fetchCharacters = async (url?: string, query: string = "") => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${url ? url : BASE_URL}${!url ? query : ""}`
      );
      switch (pathname) {
        case routerRoutes.EPISODES:
          let response = res.data as EpisodeData;
          const charactersByEpisode = await Promise.all<CharacterData>(
            response.characters.map((char) =>
              axios.get(char).then((res) => res.data)
            )
          );

          setEpisodeData(response);
          setCharactersByEpisode(charactersByEpisode);
          break;
        case routerRoutes.HOME:
        default:
          setCharacter(res?.data as Character);
          break;
      }
    } catch (error) {
      setCharacter(null);
      setCharactersByEpisode([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredCharacters = (type: string, value: string) =>
    setCurrentQuery((st) => queryConstructor(st, type, value));

  const handleCharacterSearch = (evt: ChangeEvent<HTMLInputElement>) =>
    setCharacterSearch(evt.target.value);

  const resetFilters = () => {
    setCurrentQuery("");
    setCharacterSearch("");
    setEpisodeNumber(1);
    if(isHome) fetchCharacters()
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        episodeData,
        episodeNumber,
        charactersByEpisode,
        setEpisodeNumber,
        characterSearch,
        currentQuery,
        fetchCharacters,
        fetchFilteredCharacters,
        resetFilters,
        handleCharacterSearch,
        loading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
export { CharacterContext };

export default CharacterProvider;
