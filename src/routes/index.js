import * as React from 'react';
import HomeScreen from "../pages/HomeScreen";
import GlobalScreen from "../pages/GlobalScreen";
import ListCountriesScreen from "../pages/ListCountriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Route = () => (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{headerStyle:{ backgroundColor: '#008a85' }}}>
    <Stack.Screen name="Home" options={{ title:"Covid - 19", headerTintColor: 'white' }} component={HomeScreen} />

    <Stack.Screen name="Global" options={{ title:"Situação Global", headerTintColor: 'white' }} component={GlobalScreen} />

    <Stack.Screen name="Country" options={({route}) => ({ title: route.params.name, headerTintColor: 'white' })} component={GlobalScreen} />

    <Stack.Screen name="ListCountries" options={{ title:"Situação por País", headerTintColor: 'white' }} component={ListCountriesScreen} />

  </Stack.Navigator>
</NavigationContainer>
)

export default Route;

