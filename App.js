
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import BookTransction from './screens/BookTranscation';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
    return(
      <Appcontainer/>
  
    )
}
}

const TabNavigator= createBottomTabNavigator({
  Transction:{screen:BookTransction},
  Search:{screen:SearchScreen}
})

const Appcontainer= createAppContainer(TabNavigator)
