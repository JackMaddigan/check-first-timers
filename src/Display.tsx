import { useNavigate, useParams } from 'react-router';
import { useData } from './DataContext';

export default function Display() {
  const params = useParams();
  const navigate = useNavigate();
  const { persons } = useData();
  const id = Number(params.id);
  const person = persons[id];
  const genderText = { m: 'Male', f: 'Female', o: 'Other' };

  return (
    <section className="flex flex-col p-4 items-center">
      <button onClick={() => navigate(`/persons/${id}`)} className="self-end cursor-pointer">
        Done
      </button>

      <div className='flex flex-col gap-16'>
        <div>
          <h4 className="text-sm font-bold text-gray-500">NAME</h4>
          <h2 className="text-5xl">{person.name}</h2>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-500">CITIZENSHIP</h4>
          <h2 className="text-5xl">{person.country}</h2>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-500">BIRTH DATE</h4>
          <h2 className="text-5xl">
            {new Date(person.dob).toLocaleDateString('en-NZ', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h2>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-500">GENDER</h4>
          <h2 className="text-5xl">{genderText[person.gender]}</h2>
        </div>
      </div>
    </section>
  );
}
