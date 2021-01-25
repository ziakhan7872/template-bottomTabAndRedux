import 'react-native-gesture-handler';

import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CurrentAffairs from './src/pages/CurrentAffairs';
import BusinessScreen from './src/pages/BusinessScreen';
import SettingsScreen from './src/pages/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CurrentAffairsStack() {
  return (
    <Stack.Navigator
      initialRouteName="CurrentAffairs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="CurrentAffairs"
        component={CurrentAffairs}
        options={{title: 'Current Affairs'}}
      />
    </Stack.Navigator>
  );
}

function BusinessScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="BusinessScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BusinessScreen"
        component={BusinessScreen}
        options={{title: 'Business Screen'}}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Setting Page'}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="CurrentAffairs"
        tabBarOptions={{
          activeTintColor: '#000000',
        }}>
        <Tab.Screen
          name="CurrentAffairsStack"
          component={CurrentAffairsStack}
          options={{
            tabBarLabel: 'Current Affair',
            tabBarIcon: () => <Icon name="list" size={20} color="#000" />,
          }}
        />
        <Tab.Screen
          name="BusinessScreenStack"
          component={BusinessScreenStack}
          options={{
            tabBarLabel: 'Business',
            tabBarIcon: () => (
              <Icon name="bar-chart-o" size={20} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => <Icon name="cog" size={20} color="#000" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
