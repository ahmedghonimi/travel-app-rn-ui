import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import Onboarding from './src/components/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from './src/screens/FavoritesScreen';
import TripsScreen from './src/screens/TripsScreen';
import {COLORS, FONTS} from './src/constants/theme';
import HeartIcon from './src/assets/icons/heart';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.tabIconColor,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: FONTS.GORDITA_MEDIUM,
          bottom: 5,
        },
        tabBarStyle: styles.tapBottomNavigator,
      })}>
      <Tab.Screen
        name="TripsScreen"
        component={TripsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HeartIcon
                width={32}
                height={32}
                fill={focused ? COLORS.black : 'none'}
                stroke={focused ? COLORS.black : COLORS.tabIconColor}
              />
            );
          },
          tabBarLabel: 'Trips',
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HeartIcon
                width={32}
                height={32}
                fill={focused ? COLORS.black : 'none'}
                stroke={focused ? COLORS.black : COLORS.tabIconColor}
              />
            );
          },
          tabBarLabel: 'Favourites',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HeartIcon
                width={32}
                height={32}
                fill={focused ? COLORS.black : 'none'}
                stroke={focused ? COLORS.black : COLORS.tabIconColor}
              />
            );
          },
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [showOnboardingSlider, setShowOnboardingSlider] = React.useState(false);

  if (!showOnboardingSlider) {
    return <Onboarding onDoneHandler={() => setShowOnboardingSlider(true)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tapBottomNavigator: {
    backgroundColor: COLORS.white,
    paddingTop: 0,
    paddingBottom: Platform.OS === 'android' ? 10 : 30,
    height: Platform.OS === 'android' ? 90 : 110,
  },
});

export default App;
