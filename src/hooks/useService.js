import {useState, useEffect, useContext} from 'react';
import {ServiseContext} from './context';

const useService = () => {
  const [state, setState] = useState({
    results: [],
    isLoading: true,
    isError: false,
  });

  const [page, setPage] = useState(1);

  const service = useContext(ServiseContext);

  const loadMore = () => {
    setState({...state, isLoading: true});
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    console.log('useEffect');
    service
      .getPeople(page)
      .then(data => {
        setState(prev => {
          return {
            ...prev,
            isLoading: false,
            results: [...prev.results, ...data],
          };
        });
      })
      .catch(() => {
        setState(prev => {
          return {
            ...prev,
            isLoading: false,
            isError: true,
          };
        });
      });
  }, [page, service]);

  return [state, loadMore];
};

export default useService;
