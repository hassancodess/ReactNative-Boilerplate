import React from 'react'
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();
// Screens
import Login from '../../screens/AuthStack/Login';
import Register from '../../screens/AuthStack/Register';
import ResetPassword from '../../screens/AuthStack/ResetPassword';
import CustomAppbar from '../../components/UI/CustomAppbar';

const AuthNavigator = () => {
    return (
        <Navigator
            screenOptions={{
                header: (props) => <CustomAppbar {...props} />,
            }}
        >
            <Screen name='Login' component={Login} />
            <Screen name='Register' component={Register} />
            <Screen name='ResetPassword' component={ResetPassword} />
        </Navigator>
    )
}

export default AuthNavigator
