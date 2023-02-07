
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { NotFoundPage } from './components/NotFoundPage';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
