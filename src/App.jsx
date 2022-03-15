import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { Notfound } from './pages/Notfound';


function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
