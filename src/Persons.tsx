import { useNavigate } from 'react-router';
import { useData } from './DataContext';
import { useState } from 'react';

export default function Persons() {
  const { persons } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <input
        name="filter"
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-1 border-gray-300 focus:outline-none p-2 mb-4 w-full"
      />
      <table className="w-full">
        <tbody>
          {persons &&
            persons
              .filter((p) =>
                !searchTerm.length
                  ? true
                  : p.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((p, i) => (
                <tr
                  key={i}
                  onClick={() => navigate('/persons/' + i)}
                  className={"border-1 border-gray-300 cursor-pointer transition-colors duration-300 cursor-pointer "+(p.checked ? "bg-green-100" : "bg-red-100")}
                >
                  <td className="p-2">{p.name}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </section>
  );
}