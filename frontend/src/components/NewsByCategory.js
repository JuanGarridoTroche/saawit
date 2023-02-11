import { useEffect, useState } from "react"
import { loadNewsByCategoryService } from "../services";

export const NewsByCategory = ()=> {
  const [newsByCat, setNewsByCat] = useState([]);
  const [loading, setLoading] =useState(true);
  const [error, setError] =useState('');
  

  useEffect(()=> {
    const loadNewsByCategory = async () => {
      try {
        const data = await loadNewsByCategoryService();
        setNewsByCat(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadNewsByCategory();
  }, []);


  return {newsByCat, loading, error}
}