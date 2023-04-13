import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Carlist from './components/Carlist';
import CarDetails from './components/CarDetails'


function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Carlist />} />
        <Route path='/cars/:id' element={<CarDetails/>} />å
      </Routes>
    </div>
  );
}

export default App;
