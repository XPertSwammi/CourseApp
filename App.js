import 'react-native-gesture-handler';
import React from 'react';
import Service from './src/services/service';
import {ServiseContext} from './src/hooks/context';
import Navigation from './src/navigation/navigation';

const service = new Service();

const App = () => {
  return (
    <ServiseContext.Provider value={service}>
      <Navigation />
    </ServiseContext.Provider>
  );
};

export default App;
