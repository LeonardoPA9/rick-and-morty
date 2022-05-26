import { StatusTypes } from "../types/Types";

const getBadgeType = (status: StatusTypes) => {
  let badgeClass;
  switch (status) {
    case StatusTypes.ALIVE:
      badgeClass = "success";
      break;
    case StatusTypes.DEAD:
      badgeClass = "danger";
      break;
    case StatusTypes.UNKNOWN:
    default:
      badgeClass = "secondary";
      break;
  }
  return `badge text-bg bg-${badgeClass}`;
};

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const matchingParameters = (
  query: string,
  type: string,
  filterType: string
) => {
  const REGEX = new RegExp(`\\b${type}=${filterType}\\b`);
  return query.search(REGEX) !== -1;
};

const createArrayFromRange = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i + 1);
};

export { getBadgeType, capitalize, matchingParameters, createArrayFromRange };
