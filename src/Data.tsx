import { useState } from 'react';
import { useData } from './DataContext';

export default function Data(){
  const {importPersons, exportPersons, persons} = useData();
  const [value, setValue] = useState("");

  return (
    <section>
      <div>
        <label htmlFor="import">Paste Import</label>
        <textarea name='import' onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={() => importPersons(value)}>Import</button>
        <button onClick={exportPersons}>Copy Export</button>
      </div>
      <div>
        {JSON.stringify(persons, null, 2)}
      </div>
    </section>
  );
}