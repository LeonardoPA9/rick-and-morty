import React from "react";
import { filterList } from "../../utils/Filters";
import CharacterFilter from "./CharacterFilter";

const FilterByType = () => {
  return (
    <div className="accordion" id="filterAccordion">
      {filterList.map((filter) => (
        <CharacterFilter key={filter.type} {...filter} />
      ))}
    </div>
  );
};

export default FilterByType;
