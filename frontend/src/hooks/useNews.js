import { useEffect, useState } from "react";
import { loadNewsByFeedbackService, loadNewsService } from "../services";

const useNews = (TypeOfNews) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newsType, setNewsType] = useState(TypeOfNews);
  


// Se carga solo la primera vez. Función asíncrona ya que solictamos datos a elementos externos como nuestro backend
  useEffect(() => {
    const loadNews = async () => {
      try {
        // FIXME: Habría que solicitar las noticias de la más actual a la más antigua (crear el endpoint en el backend)
        // Nos conectamos al backend y solicitamos las noticias ordenadas de mejor a peor feedback (/news/top)
        if(newsType === 'Home') {
          const data = await loadNewsService();
          setNews(data);
          
        }
        if(newsType === 'byFeedback'){
          const data = await loadNewsByFeedbackService();
          setNews(data);
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [newsType]);

  const addNews = (loadLastNews) => {
    setNews([news, ...news]);
  }

  return {news, loading, error, addNews};
};

export default useNews;
