import {useState, useEffect} from 'react';

const useContactFilter = results => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const getCities = items => {
    return items.map(item => {
      return {
        label: item.city,
        value: item.city,
      };
    });
  };

  const cityFilter = items => {
    return selectedCity === null
      ? items
      : items.filter(item => {
          return item.city === selectedCity;
        });
  };

  const clearFilter = () => {
    setSelectedCity(null);
  };

  useEffect(() => {
    setCities(prev => {
      return [...prev, ...getCities(results)];
    });
  }, [results]);

  return {cities, cityFilter, clearFilter, selectedCity, setSelectedCity};
};

export default useContactFilter;
