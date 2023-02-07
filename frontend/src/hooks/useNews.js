import { useEffect, useState } from "react";
import { loadNewsService } from "../services/loadNewsService";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("inicio");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);

        const data = await loadNewsService();
        setNews(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };
    loadNews();
  }, []);

  return (news, loading, error);
};
