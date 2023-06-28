import React from 'react'
// Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const { Navigator, Screen } = createMaterialBottomTabNavigator();
// Screens
import Home from '../../screens/DashboardBottomTabs/Home';
import Profile from '../../screens/DashboardBottomTabs/Profile';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const icons = {
    Home: 'home',
    Profile: 'person',
};
const DashboardNavigator = () => {
    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name={icons[route.name]} size={24} color={color} />;
                },
            })}
        >
            <Screen name='Home' component={Home} />
            <Screen name='Profile' component={Profile} />
        </Navigator>
    )
}

export default DashboardNavigator
