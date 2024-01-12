import * as React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {store} from '../store/store';

// screens
import home from '../screens/home';
import cart from '../screens/cart';
// import product from '../screens/product';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={home} />
            <Stack.Screen name="Cart" component={cart} />
            {/* <Stack.Screen name="Product" component={product} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
