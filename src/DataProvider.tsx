import { useEffect, useState, type ReactNode } from 'react';
import { DataContext, type Person } from './DataContext';

export default function DataProvider({ children }: { children: ReactNode }) {
  const [persons, setPersons] = useState<Person[]>(() => {
    const data = localStorage.getItem('persons');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons));
  }, [persons]);

  const importPersons = (csv: string) => {
    console.log("Importing...", csv);
    // parse csv with Name, Country, Birth Date, Gender, Checked, Comment
    const data = csv.split('\n').slice(1).flatMap((line) => {
      const [name, country, dob, gender, checked, comment] = line.split(',');
      console.log(name, country, dob, gender, checked, comment);
      if (!name || !country || !dob || !gender) return [];
      if (!['m', 'f', 'o'].includes(gender)) return [];
      return {
        name,
        country,
        dob: new Date(dob),
        gender,
        checked: checked ? JSON.parse(checked) === true : false,
        comment: comment || '',
      } as Person;
    });
    setPersons(data);
  };

  const exportPersons = async () => {
    // save to clipboard
    const str =
      persons
        .map(
          (p) =>
            `${p.name},${p.country},${p.dob},${p.gender},${p.checked},${p.comment}`
        )
        .join('\n') || 'No Persons';
    await navigator.clipboard.writeText(str);
  };


  const updatePerson = (i: number, p: Person) => {
    console.log("Updating", p.name, "...");
    const newPersons = [...persons];
    newPersons[i] = p;
    setPersons(newPersons);
  }


  const value = { persons, importPersons, exportPersons, updatePerson };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
