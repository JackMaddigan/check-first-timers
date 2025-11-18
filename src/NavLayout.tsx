import { Settings, UserSearch } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router';

export default function NavLayout() {
  const navigate = useNavigate();
  return (
    <section className='p-4'>
      <section className='flex flex-row gap-2 mb-4 items-center'>
        <a onClick={() => navigate("data")} className='cursor-pointer text-black'><Settings className='w-12 h-12' /></a>
        <a onClick={() => navigate("/")} className='cursor-pointer text-black'><UserSearch className='w-12 h-12' /></a>
        <a href="https://github.com/JackMaddigan/check-first-timers" className='cursor-pointer text-black ml-auto'>Github</a>
      </section>
      <Outlet />
    </section>
  );
}