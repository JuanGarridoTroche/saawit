
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
