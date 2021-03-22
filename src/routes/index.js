import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../components/Auth/Landing';

const Stack = createStackNavigator();

export default Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
