import React from 'react';
import { SafeAreaView, StatusBar }from 'react-native';
import {MainPage} from './src/pages/main.page'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'default'} />
        <MainPage />
    </SafeAreaView>
  );
};


export default App;
  