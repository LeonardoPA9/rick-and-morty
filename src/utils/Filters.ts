import {
  FilterTypes,
  GenderTypes,
  SpeciesTypes,
  StatusTypes,
} from "../types/Types";

interface FilterType {
  type: FilterTypes;
  filterValue: string[];
}
const filterList: FilterType[] = [
  { type: FilterTypes.STATUS, filterValue: Object.values(StatusTypes) },
  { type: FilterTypes.GENDER, filterValue: Object.values(GenderTypes) },
  { type: FilterTypes.SPECIES, filterValue: Object.values(SpeciesTypes) },
];

const queryConstructor = (
  url: string,
  type: string,
  value: string,
): string => {
  let query: string = "";
  if (url.includes("?")) {
    if (url.includes(type)) {
      const pattern = new RegExp("\\b(" + type + "=).*?(&|#|$)");
      query = url.replace(pattern, `${type}=${value}&`);
      if (query.endsWith("&")) {
        return query.substring(0, query.length - 1);
      }
    } else {
      query = `${url}&${type}=${value}`;
    }
  } else {
    query = `?${type}=${value}`;
  }
  return query;
};

export { filterList, queryConstructor };
