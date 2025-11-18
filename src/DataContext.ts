import { createContext, useContext } from 'react';

export interface Person {
  name: string,
  country: string,
  dob: string,
  gender: "m" | "f" | "o",
  checked: boolean,
  comment: string
}

export interface DataProviderProps {
  persons: Person[],
  importPersons: (csv: string) => void,
  exportPersons: () => void,
  updatePerson: (id: number, person: Person) => void;
}

export const DataContext = createContext<DataProviderProps>({
  persons: [],
  importPersons: () => {},
  exportPersons: () => {},
  updatePerson: () => {},
});

export const useData = () => useContext(DataContext);
