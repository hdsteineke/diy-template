import { useContext, useEffect, useState } from 'react';
import{
  FuzzyBunnyContext
} from '../context/FuzzyBunnyContext.jsx';
import { 
  getFamilies, 
  addFamily, 
  deleteFamily, 
  updateFamily 
} from '../services/fetch-utils.js';



//a function that fetches all families from the database on load
//Error is displayed when there is an error process the request
//Otherwise, dispatch is called to load families
export function useFamilies() {
  const [error, setError] = useState(null);
  const { families, dispatch } = useContext(FuzzyBunnyContext);

  useEffect(() => {
    if (families) return;
    let ignore = false;
    
    const fetch = async () => {
      const { data, error } = await getFamilies();
      if (ignore) return;

      if (error) {
        setError(error);
      }
      if (data)  {
        dispatch({ type: 'load', payload: data });
      }
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { families, error };
}

//A function that entails the various CRUD operations for editing families,
//connecting each CRUD operation with it's respective dispatch call,
//as well as an error message when appropriate
export function useActions() {
  const { dispatch } = useContext(FuzzyBunnyContext);

  const add = async (family) => {
    const { data, error } = await addFamily(family);
    if (error) {
      Error('Something went wrong. Please try again.');
    }
    if (data) {
      dispatch({ type: 'add', payload: data });
      alert('Added successfully!');
    }
  };


  const remove = async (id) => {
    const { data, error } = await deleteFamily(id);
    if (error) {
      Error('Something went wrong. Please try again.');
    }
    if (data) {
      dispatch({ type: 'remove', payload: data });
      alert('Removed successfully!');
    }
  };


  const update = async (family) => {
    const { data, error } = await updateFamily(family);
    if (error) {
      Error('Something went wrong. Please try again.');
    }
    if (data) {
      dispatch({ type: 'update', payload: data });
      alert('Updated successfully!');
    }
  };

  return { add, remove, update };
}


