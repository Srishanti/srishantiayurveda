import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ItemPage from './pages/ItemPage';
import './App.css';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/item/:id' element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
