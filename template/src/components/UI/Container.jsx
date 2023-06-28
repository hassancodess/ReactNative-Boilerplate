import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    StatusBar,
} from 'react-native';
import React from 'react';

const Container = ({ children }) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    )
};

export default Container;

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 10,
    },
});