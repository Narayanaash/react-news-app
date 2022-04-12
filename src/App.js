import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import SeachResult from './pages/SearchResult/SearchResult';
import './style.css';

function App() {
  return (
    <BrowserRouter primary={false}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":pagename" element={<Inner />} />
        <Route path="/search/:terms" element={<SeachResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
