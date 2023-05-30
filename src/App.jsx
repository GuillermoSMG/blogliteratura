import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Tercero from './components/Tercero';
import Cuarto from './components/Cuarto';
import Quinto from './components/Quinto';
import Sexto from './components/Sexto';
import TerceroDetail from './components/TerceroDetail';
import CuartoDetail from './components/CuartoDetail';
import QuintoDetail from './components/QuintoDetail';
import SextoDetail from './components/SextoDetail';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/tercero'
          element={<Tercero />}
        />
        <Route
          path='/cuarto'
          element={<Cuarto />}
        />
        <Route
          path='/quinto'
          element={<Quinto />}
        />
        <Route
          path='/sexto'
          element={<Sexto />}
        />
        <Route
          path='/tercero/:name?'
          element={<TerceroDetail />}
        />
        <Route
          path='/cuarto/:name?'
          element={<CuartoDetail />}
        />
        <Route
          path='/quinto/:name?'
          element={<QuintoDetail />}
        />
        <Route
          path='/sexto/:name?'
          element={<SextoDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
