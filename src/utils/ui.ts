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

const createArrayFromNumber = (length: number): number[] => {
  return Array.from({ length }, (_, i) => i + 1);
};

const createArrayFromRange = (
  start: number,
  stop: number,
  step: number = 1
) => {
  const length = Math.ceil((stop - start) / step);
  return Array.from({ length }, (_, i) => i * step + start);
};

const getParameterByName = (name: string, url: string) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};
export {
  getBadgeType,
  capitalize,
  matchingParameters,
  createArrayFromNumber,
  getParameterByName,
  createArrayFromRange,
};
