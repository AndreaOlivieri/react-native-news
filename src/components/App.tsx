/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, FlatList, Linking} from 'react-native';
import {Button, Text} from 'react-native-paper';
import courses from '../data/courses.json';
import AppStyles from '../styles/AppStyles';

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
        <View>
          <Text>{item.title}</Text>
          <Button
            onPress={() => {
              handleClick(item.link);
            }}>
            Tap to view course
          </Button>
        </View>
      )}
    />
  </View>
);

export default App;
