import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, this is a test screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
});

export default Index;