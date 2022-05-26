interface Character {
  info: InfoType;
  results: CharacterData[];
}

interface InfoType {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface CharacterData {
  id: number;
  name: string;
  status: StatusTypes;
  type: string;
  gender: GenderTypes;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface EpisodeData {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

enum StatusTypes {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

enum GenderTypes {
  FEMALE = "Female",
  MALE = "Male",
  GENDERLESS = "Genderless",
  UNKNOWN = "unknown",
}

enum FilterTypes {
  STATUS = "status",
  SPECIES = "species",
  GENDER = "gender",
}

enum SpeciesTypes {
  HUMAN = "Human",
  ALIEN = "Alien",
  HUMANOID = "Humanoid",
  POOPY = "Poopybutthole",
  MYTH = "Mythological",
  ANIMAL = "Animal",
  DISEASE = "Disease",
  ROBOT = "Robot",
  Cronenberg = "Cronenberg",
  PLANET = "Planet",
  UNKNOWN = "unknown",
}

export { StatusTypes, GenderTypes, FilterTypes, SpeciesTypes };

export type { Character, CharacterData, EpisodeData };
