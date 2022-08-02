import React from 'react';
import Onboarding from './src/components/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showOnboardingSlider, setShowOnboardingSlider] = React.useState(false);

  if (!showOnboardingSlider) {
    return <Onboarding onDoneHandler={() => setShowOnboardingSlider(true)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
