import {useState, useEffect} from 'react';

const useMainService = getData => {
  const [state, setState] = useState({
    results: [],
    isLoading: true,
    isError: false,
  });
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setState({...state, isLoading: true});
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    console.log('useEffect');

    getData(page)
      .then(data => {
        setState(prev => {
          return {
            ...prev,
            results: [...prev.results, ...data],
            isLoading: false,
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
  }, [page, getData]);

  return {state, loadMore, setPage};
};

export default useMainService;
