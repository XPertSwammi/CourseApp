import {useState} from 'react';

const useTermFilter = results => {
  const [term, setTerm] = useState('');

  const termFilter = () => {
    return term.length === 0
      ? results
      : results.filter(item => {
          return item.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
  };
  return {term, setTerm, termFilter};
};

export default useTermFilter;
