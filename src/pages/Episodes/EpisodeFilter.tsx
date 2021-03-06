import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { createArrayFromNumber } from "../../utils/ui";

const EpisodeFilter = () => {
  const { episodeData, episodeNumber, setEpisodeNumber } =
    useContext(CharacterContext);
    const CURRENT_EPISODES = 51
  return (
    <div className="card text-center">
      <div className="card-header">{episodeData?.episode} </div>
      <div className="card-body">
        <h5 className="card-title">{episodeData?.name}</h5>
        <p className="card-text">Look for episode</p>
        <select
          value={episodeNumber}
          onChange={(evt) => setEpisodeNumber(+evt.target.value)}
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          {createArrayFromNumber(CURRENT_EPISODES).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="card-footer text-muted">{episodeData?.air_date}</div>
    </div>
  );
};

export default EpisodeFilter;
