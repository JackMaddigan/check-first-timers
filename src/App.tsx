import { BrowserRouter, Route, Routes } from 'react-router';
import Data from './Data';
import Person from './Person';
import Persons from './Persons';
import Display from './Display';
import DataProvider from './DataProvider';
import NavLayout from './NavLayout';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route element={<NavLayout />}>
            <Route index element={<Persons />} />
            <Route path="data" element={<Data />} />
            <Route path="persons/:id" element={<Person />} />
          </Route>

          <Route
            path="persons/:id/display"
            element={<Display />}
          />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
