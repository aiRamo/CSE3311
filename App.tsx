import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import Login from './Components/Login';
import LostReport from './Components/LostReport';
import Settings from './Components/Settings';
import FoundReport from './Components/FoundReport';

const Stack = createNativeStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Signup/Login"
        component={Login}
        options={{title: 'Welcome to Founday'}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lost Report" component={LostReport} />
      <Stack.Screen name="Found Report" component={FoundReport} />
      <Stack.Screen name="User Settings" component={Settings} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;