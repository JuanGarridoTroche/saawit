import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import { NotFoundPage } from "./components/NotFoundPage";
import { Register } from "./components/Register";
import { TopRankedNews } from "./components/TopRankedNews";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/photo" element={<Home />} />
          <Route path="/users/profile" element={<Home />} />
          <Route path="/users/password" element={<Home />} />
          <Route path="/users/password/solicitude" element={<Home />} />
          <Route path="/users/password/recover" element={<Home />} />
          {/* Crear una noticia, método: post */}
          <Route path="/news" element={<Home />} />
          {/* Editar una noticia creada por el usuario registrado método: put */}
          <Route path="/news/:idNews" element={<Home />} />
          {/* Eliminar una noticia: método: delete */}
          <Route path="/news/:idNews" element={<Home />} />
          {/* Lista de las últimas noticias vloradas por feedback, método: get */}
          <Route path="/news/top" element={<TopRankedNews />} />
          {/* Noticias filtradas con fecha inicio y fecha fin, método: get */}
          <Route path="/news" element={<Home />} />
          {/* Noticias filtrdas por categoría, método: get */}
          <Route path="/news/filter" element={<Home />} />
          {/* Votar una noticia publicada que no sea de tu propiedad, método: post */}
          <Route path="/news/:idNews/votes" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
