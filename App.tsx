import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './screens/index';
import RatingPage from './screens/components/RatingPage';
import Eng from './screens/components/Eng';
import Chi from './screens/components/Chi';
import BM from './screens/components/BM'; 

type RootStackParamList = {
  Index: undefined;
  Home: { selectedLanguage: string };
  BM: undefined;
  Eng: { greeting?: string };
  Chi: { greeting?: string };
  RatingPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ title: 'Select Language' }} />
        <Stack.Screen name="BM" component={BM} options={{ title: 'Malay Learning Page' }} />
        <Stack.Screen name="Eng" component={Eng} options={{ title: 'English Learning Page' }} />
        <Stack.Screen name="Chi" component={Chi} options={{ title: 'Chinese Learning Page' }} />
        <Stack.Screen name="RatingPage" component={RatingPage} options={{ title: 'Rate Us' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
