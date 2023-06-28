import React from 'react'
// Navigtaion

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();
// Navigators
import AuthNavigator from '../AuthStack/AuthNavigator';
import DashboardNavigator from '../DashboardBottomTabs/DashboardNavigator';

const MainNavigator = () => {
    return (
        <Navigator
            initialRouteName='Authentication'
            screenOptions={{
                headerShown: false
            }}>
            <Screen name='Authenticaton' component={AuthNavigator} />
            <Screen name='Dashboard' component={DashboardNavigator} />
        </Navigator>
    )
}

export default MainNavigator