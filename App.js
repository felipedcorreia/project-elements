// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { Icon, } from 'react-native-elements';
import { StyleSheet,  } from 'react-native';






/*function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}*/

import Home from './src/screens/Home/index.js';
import Login from './src/screens/Login/index.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(

);


function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>

  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Login"
        drawerContentOptions={{
          activeTintColor: '#0e1371',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Icon
                name='home'
                type='font-awesome' />
            ),
          }}
          component={Home} />
        <Drawer.Screen
          name="Login"
          options={{
            drawerLabel: 'Login', drawerIcon: ({ color, size }) => (
              <Icon
                name='user'
                type='font-awesome' />
            ),
          }}
          component={Login} />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Icon
                name='sliders'
                type='font-awesome' />
            ),
          }}
          component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
})