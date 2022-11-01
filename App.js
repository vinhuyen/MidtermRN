import React from 'react';
import DiabetesCare from './src/screens/DiabetesCare';
import Account from './src/screens/Account';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="abc"
          options={{title: '', tabBarIcon: <FontAwesomeIcon icon={faHouse} />}}>
          {() => <DiabetesCare />}
        </Tab.Screen>
        <Tab.Screen name="xyz">{() => <Account />}</Tab.Screen>
        <Tab.Screen name="lmn">{() => <Account />}</Tab.Screen>
        <Tab.Screen name="ooo">{() => <Account />}</Tab.Screen>
        <Tab.Screen name="ylk">{() => <Account />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
export default App;
