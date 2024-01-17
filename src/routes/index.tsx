import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// utils
import { renderGuestRouets, RouteConfigType } from './utils/routeHelper';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {renderGuestRouets().map((route: RouteConfigType) => (
          <Stack.Screen key={route.name} name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
