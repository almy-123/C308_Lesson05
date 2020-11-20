/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MovieList} from './Movies.js';
import {DisBoat} from './Boats.js';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Lesson 05 Exercises</Text>
      <Text></Text>
      <MovieList />
      <Text></Text>
      <Text>GetABoat - For Sale</Text>
      <DisBoat />
    </ScrollView>
  );
};

export default App;
