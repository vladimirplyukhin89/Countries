import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { Notfound } from './pages/Notfound';


function App() {
  const [countries, setCountries] = useState([]);

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
