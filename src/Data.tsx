import { useState } from 'react';
import { useData } from './DataContext';

export default function Data(){
  const {importPersons, exportPersons} = useData();
  const [value, setValue] = useState("");

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-gray-500" htmlFor="import">
          PASTE IMPORT
        </label>
        <textarea
          name="import"
          placeholder="Name,Country,Birth Date,Gender,Checked,Comment
Jack Maddigan,New Zealand,YYYY-MM-DD,m,,"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="border border-gray-300 h-100"
        />
        <button
          onClick={() => importPersons(value)}
          className="border border-green-800 text-green-800 bg-green-100 py-1 px-3 rounded-full self-start cursor-pointer"
        >
          Import
        </button>
      </div>
      <button
        onClick={exportPersons}
        className="border border-green-800 text-green-800 bg-green-100 py-1 px-3 rounded-full self-start cursor-pointer"
      >
        Copy Export
      </button>
    </section>
  );
}