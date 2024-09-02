import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SplashScreen = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.replace('IntroScreen');
        }, 3000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
        backgroundColor: 'black',   
    },
    text: {
        color: 'white',
        fontSize: 40,              
        fontWeight: 'bold',        
    },
});

export default SplashScreen;
