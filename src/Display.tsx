import { useNavigate, useParams } from 'react-router';
import { useData } from './DataContext';

export default function Display() {
  const params = useParams();
  const navigate = useNavigate();
  const { persons } = useData();
  const id = Number(params.id);
  const person = persons[id];
  const genderText = {m: "Male", f: "Female", o: "Other"}

  return (
    <section>
      <button onClick={() => navigate(`/persons/${id}`)}>Done</button>
      <h1>{person.name}</h1>
      <h3>Citizenship: {person.country}</h3>
      <h3>Birth Date: {new Date(person.dob).toLocaleDateString('en-NZ', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </h3>
      <h3>Gender: {genderText[person.gender]}</h3>
    </section>
  );
}
