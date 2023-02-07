import { useEffect, useState } from "react";
import { loadNewsService } from "../services";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        const data = await loadNewsService();
        setNews(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  return {news, loading, error};
};

export default useNews;
