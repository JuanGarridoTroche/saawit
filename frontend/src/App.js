import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFoundPage } from "./components/NotFoundPage";
import { Register } from "./pages/Register";
import { NewsByFeedback } from "./pages/NewsByFeedback";
import { ReadNews } from "./pages/ReadNews";
import { CreateNews } from "./components/CreateNews";
import { UserProfile } from "./pages/UserProfile";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Login de usuario */}
          <Route path="/users/login" element={<Login />} />
          {/* Registro de nuevo usuario */}
          <Route path="/register" element={<Register />} />
          {/* Añadir foto de perfil (avatar) del usuario */}
          {/* Ver el perfil de un usuario */}
          <Route path="/users/profile/:idUser" element={<UserProfile />} />
          {/* Modificar el perfil del usuario */}
          {/* Modificar la contraseña */}
          {/* Solicitud para que nos envíen a nuestro correo el PassCode para cambiar la contraseña */}
          {/* Recuperación de contraseña (es necesario el Passcode) */}
          {/* Crear una noticia, método: post */}
          <Route path="/news" element={<CreateNews />} />
          {/* Leer una noticia, método: get */}
          <Route path="/news/:idNews" element={<ReadNews />} />
          {/* Editar una noticia creada por el usuario registrado método: put */}

          {/* Noticias fitradas por categoría */}          
          {/* Lista de las últimas noticias vloradas por feedback, método: get */}
          <Route path="/news/ByFeedback" element={<NewsByFeedback />} />
          {/* Noticias filtradas con fecha inicio y fecha fin, método: get */}
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
