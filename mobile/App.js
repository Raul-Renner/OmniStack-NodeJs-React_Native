import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {Text, View } from 'react-native';
import './src/routes'
import Routes from './src/routes';
export default function App() {
  return (
    <Routes/>
  );
}

/**const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001175',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    color: '#FFFF',
    fontWeight: 'bold',


  },
}); */
