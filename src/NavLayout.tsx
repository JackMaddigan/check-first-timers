import { Settings, UserSearch } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router';

export default function NavLayout() {
  const navigate = useNavigate();
  return (
    <section className='p-4'>
      <section className='flex flex-row gap-2 mb-4'>
        <a onClick={() => navigate("data")} className='cursor-pointer text-gray-600'><Settings /></a>
        <a onClick={() => navigate("/")} className='cursor-pointer text-gray-600'><UserSearch /></a>
      </section>
      <Outlet />
    </section>
  );
}