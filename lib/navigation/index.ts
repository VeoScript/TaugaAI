import { Person } from "../types/person";

export type RootStackParamList = {
  People: undefined;
  Detail: {
    person: Person;
  };
};
