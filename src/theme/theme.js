import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    MD2DarkTheme,
    MD2LightTheme,
    configureFonts
} from 'react-native-paper';
import fontConfig from './fonts';

export const lightTheme = {
    ...MD2LightTheme,
    ...NavigationDefaultTheme,
    fonts: configureFonts({ config: fontConfig, isV3: false }),
    colors: {
        ...MD2LightTheme.colors,
        ...NavigationDefaultTheme.colors,
    },
};
export const darkTheme = {
    ...MD2DarkTheme,
    ...NavigationDarkTheme,
    fonts: configureFonts({ config: fontConfig, isV3: false }),
    colors: {
        ...MD2DarkTheme.colors,
        ...NavigationDarkTheme.colors,
    },
};