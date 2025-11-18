import { useNavigate, useParams } from 'react-router';
import { useData } from './DataContext';
import { useState } from 'react';

export default function Person() {
  const { persons, updatePerson } = useData();
  const params = useParams();
  const id = Number(params.id);
  const navigate = useNavigate();
  console.log(id, persons);
  const person = persons[id];

  const [comment, setComment] = useState(person.comment);
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl">{person.name}</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="comment" className="text-sm text-black font-bold">
          EDIT COMMENT
        </label>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => setComment('ID checked')}
            className="border border-gray-500 bg-gray-100 py-1 px-3 rounded-full text-xs cursor-pointer"
          >
            ID Checked
          </button>
          <button
            onClick={() => setComment('Verbally checked')}
            className="border border-gray-500 bg-gray-100 py-1 px-3 rounded-full text-xs cursor-pointer"
          >
            Verbally Checked
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <textarea
            name="comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-500 p-2"
          />
          <button
            onClick={() => updatePerson(id, { ...person, comment })}
            className="border border-green-800 text-green-800 bg-green-100 py-1 px-3 rounded-full self-start cursor-pointer"
          >
            Save Comment
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor="check" className="text-sm text-black font-bold">
          TOGGLE CHECKED STATUS
        </label>
        <input
          type="checkbox"
          name="check"
          checked={person.checked}
          onChange={() =>
            updatePerson(id, { ...person, checked: !person.checked })
          }
          className="self-start w-24 h-24 accent-green-100 border border-green-800 cursor-pointer"
        />
      </div>

      <button onClick={() => navigate('display')} className='self-bottom border border-blue-800 bg-blue-100 text-blue-950 text-lg font-bold p-4 rounded-full cursor-pointer'>Display</button>
    </section>
  );
}
