import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { Notfound } from './pages/Notfound';
import { Layout } from './components/Layout';
import axios from 'axios';
import { ALL_COUNTRIES } from './config';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES)
      .then(
        ({ data }) => setCountries(data)
      );
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='country/:name' element={<Details />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
