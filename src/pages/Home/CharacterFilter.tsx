import React, { useState, useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import useMemoizedSorting from "../../hooks/useMemoizedSorting";
import { capitalize, matchingParameters } from "../../utils/ui";
interface Props {
  type: string;
  filterValue: string[];
}
const CharacterFilter = ({ type, filterValue }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { fetchFilteredCharacters, currentQuery } =
    useContext(CharacterContext);

  const memoizedValues = useMemoizedSorting(
    filterValue.sort((a, b) => a.localeCompare(b))
  );

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`accordion-button ${!toggle && "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          onClick={() => setToggle((st) => !st)}
        >
          {capitalize(type)}
        </button>
      </h2>
      <div
        id="collapseOne"
        className={`accordion-collapse collapse ${toggle && "show"}`}
        aria-labelledby="headingOne"
        data-bs-parent="#filterAccordion"
      >
        <div className="accordion-body accordion-color-success">
          {memoizedValues.map((filterType) => (
            <button
              key={filterType}
              type="button"
              className={`btn ${
                matchingParameters(currentQuery, type, filterType)
                  ? "btn-success"
                  : "btn-outline-success"
              } m-2`}
              onClick={() => fetchFilteredCharacters(type, filterType)}
            >
              {filterType}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterFilter;
