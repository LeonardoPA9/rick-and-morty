import React from "react";
import { CharacterData } from "../../types/Types";
import { getBadgeType } from "../../utils/ui";
import styles from "./CharacterCard.module.css";

interface Props {
  character: CharacterData;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="col-3 py-2 position-relative">
      <div className={styles.card}>
        <img src={character?.image} alt="" className="img-fluid" />
        <div className={styles.info}>
          <div className="fs-4 fw-bold mb-4">{character?.name}</div>
          <div>
            <div className="fs-6">Last Location</div>
            <div className="fs-5">{character?.location?.name}</div>
          </div>
        </div>
      </div>
      <span
        className={`${getBadgeType(character?.status)} position-absolute ${
          styles.badge
        }`}
      >
        {character.status}
      </span>
    </div>
  );
};

export default CharacterCard;
