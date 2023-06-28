import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, useTheme, Button } from 'react-native-paper'
import Container from '../../components/UI/Container'
import { COLORS, SIZES } from '../../constants/constants'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    // Styles
    const theme = useTheme()
    const styles = useMemo(() => createStyles(theme), [theme]);
    // Navigation
    const navigation = useNavigation()
    return (
        <Container>
            <Text style={styles.text}>Login</Text>
            <Button mode='contained' onPress={() => navigation.navigate('Register')}>Goto Register</Button>
        </Container>
    )
}

export default Login

const createStyles = theme => StyleSheet.create({
    text: {
        fontSize: SIZES.xxl,
        // fontWeight: 'bold',
        color: theme.colors.primary,
        // fon
        fontFamily: theme.fonts.regular.fontFamily
    }
})
