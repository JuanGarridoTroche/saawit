import  useNews  from "../hooks/useNews";
import { NewsList } from "../components/NewsList";

export const Home = () => {
  const { news, loading, error } = useNews();  

  if (loading) return <p>Cargando noticias...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>      
      <NewsList news={news} />
    </>
  );
};
