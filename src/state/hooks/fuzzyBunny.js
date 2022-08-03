import { useContext, useEffect, useMemo, useState } from 'react';
import{
  FuzzyBunnyContext
} from '../context/FuzzyBunnyContext.jsx';
import { getFamilies } from '../services/fetch-utils.js';


export function useFamilies() {
  const [error, setError] = useState(null);
  const { families } = useContext(FuzzyBunnyContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;
    
    const fetch = async () => {
      const { data, error } = await getFamilies();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      // if (data)  {
      //   familiesDispatch({ type: 'load', payload: data });
      // }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { families, error };
}


