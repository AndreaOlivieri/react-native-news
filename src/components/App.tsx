/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, FlatList, Linking} from 'react-native';
import {Button} from 'react-native-paper';
import courses from '../data/courses.json';

const handleClick = (link: any) => {
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URL");
    }
  });
};

const App = () => (
  <View>
    <FlatList
      data={courses}
      renderItem={({item}) => (
        <Button
          onPress={() => {
            handleClick(item.link);
          }}>
          {item.title}
        </Button>
      )}
    />
  </View>
);

export default App;
