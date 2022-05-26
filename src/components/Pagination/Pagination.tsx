import React, { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { Character } from "../../types/Types";
import { createArrayFromRange, getParameterByName } from "../../utils/ui";

interface Props {
  character: Character | null;
  onPaginate: (type: string, value: string) => void;
  goFirst: () => void;
  currentQuery: string;
}

const Pagination = ({
  character,
  onPaginate,
  goFirst,
  currentQuery,
}: Props) => {
  const [prevValue, nextValue] = [character?.info?.prev, character?.info?.next];
  let currentPage: number = 1;
  const totalPages = character?.info.pages as number;
  if (currentQuery.includes("page")) {
    currentPage = +(getParameterByName("page", currentQuery) || 1) as number;
  }
  const minRange = currentPage - 5 > 0 ? currentPage - 5 : 1;
  const maxRange = minRange + 9 < totalPages ? minRange + 9 : totalPages + 1;

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${!prevValue ? "disabled" : ""}`}>
          <button
            onClick={() => goFirst()}
            className={`page-link ${prevValue ? "text-success" : ""}`}
          >
            First
          </button>
        </li>
        <li className={`page-item ${!prevValue ? "disabled" : ""}`}>
          <button
            onClick={() => onPaginate("page", `${currentPage - 1}`)}
            className={`page-link ${prevValue ? "text-success" : ""}`}
          >
            Previous
          </button>
        </li>
        {createArrayFromRange(minRange, maxRange).map((page) => (
          <li key={page} className="page-item">
            <button
              onClick={() => onPaginate("page", `${page}`)}
              className={`page-link ${
                page === currentPage ? "text-bg-success" : "text-success"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`page-item ${!nextValue ? "disabled" : ""}`}>
          <button
            onClick={() => onPaginate("page", `${currentPage + 1}`)}
            className={`page-link ${nextValue ? "text-success" : ""}`}
          >
            Next
          </button>
        </li>
        <li className={`page-item ${!nextValue ? "disabled" : ""}`}>
          <button
            onClick={() => onPaginate("page", `${character?.info.pages}`)}
            className={`page-link ${nextValue ? "text-success" : ""}`}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
