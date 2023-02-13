import { useEffect, useState } from "react";
import { getUserDataService } from "../services";

const useUserProfile = (idUser) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState('');
  // console.log(idUser);

  useEffect(()=> {
    const loadUserProfile = async () => {
      try {
        const data = await getUserDataService(idUser);  
        setUser(data);  
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    }
    loadUserProfile();
  }, [idUser])
  return {user, loading, error}
}

export default useUserProfile;