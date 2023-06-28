import React from 'react'
import { useColorScheme } from 'react-native'
import MainNavigator from './src/navigation/MainStack/MainNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper'
import { lightTheme, darkTheme } from './src/theme/theme';

const App = () => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === 'dark' ? darkTheme : lightTheme;
  // theme.fonts.default
  // theme.fonts.
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
