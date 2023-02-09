import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./components/NotFoundPage";
import { Register } from "./pages/Register";
import { TopRankedNews } from "./components/TopRankedNews";
import { ReadNews } from "./pages/ReadNews";
import { CreateNews } from "./components/CreateNews";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/photo" element={<Home />} />
          <Route path="/users/profile" element={<Home />} />
          <Route path="/users/profile/:idUSer" element={<Home />} />
          <Route path="/users/password" element={<Home />} />
          <Route path="/users/password/solicitude" element={<Home />} />
          <Route path="/users/password/recover" element={<Home />} />
          {/* Crear una noticia, método: post */}
          <Route path="/news" element={<CreateNews />} />
          {/* Leer una noticia, método: get */}
          <Route path="/news/:idNews" element={<ReadNews />} />  
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
    </>
  );
}

export default App;
