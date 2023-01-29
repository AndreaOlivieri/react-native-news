/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, FlatList, Linking} from 'react-native';
import {Appbar, Button, Card, Paragraph, Title} from 'react-native-paper';
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
    <Appbar style={AppStyles.bar}>
      <Appbar.Content title="Courses" />
    </Appbar>
    <FlatList
      data={courses}
      renderItem={({item}) => (
        <Card>
          <Card.Cover source={{uri: item.image}} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => {
                handleClick(item.link);
              }}>
              Tap to view course
            </Button>
          </Card.Actions>
        </Card>
      )}
    />
  </View>
);

export default App;
