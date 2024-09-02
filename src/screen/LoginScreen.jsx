import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {  Button,  IconButton, Input, NativeBaseProvider, VStack, Icon } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

export default function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [showPassword , setShowPassword] = useState('');

    const validationFiels = () => {
        let isValid = true;
        let emailErrors = '';
        let passwordError = '';

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!email) {
            emailErrors = 'Email is required';
            isValid = false;

        } else if (!emailPattern.test (email)) {
            emailErrors = 'Please enter valid email address';
            isValid = false;
        }
        if (!password) {
            passwordError = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            passwordError = 'Password must be at least 6 characters long';
            isValid = false;
        }
        setErrors({ email: emailErrors, password: passwordError });
        return isValid;
    };
    const loginPress = () => {
        if (validationFiels()) {
            console.log("Email: ", email);
            console.log("Password", password);
            props.navigation.navigate("MainScreen");
            
        }
        
    }


    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <ImageBackground source={require("../assets/main.jpg")} style={styles.imbg}>
                        <VStack style={{ alignItems: 'center', margin: 15 }}>

                            <Text style={styles.head}>Login</Text>
                            <VStack space={4} width="100%" alignItems="center" mar>
                                <Input
                                    placeholder='Email'
                                    variant='outline'
                                    color={'black'}
                                    backgroundColor='#FAF9F6'
                                    size='lg'
                                    borderRadius='15'
                                    width="90%"
                                    value={email}
                                    onChangeText={text => setEmail(text)}

                                    />
                                    {errors.email ? <Text style={{color: 'red', margin: -10, fontSize: 13}}>{errors.email}</Text>:null}

                                    

                                <Input
                                    placeholder='Password'
                                    variant='outline'
                                    color={'black'}
                                    backgroundColor='#f8f1f1'
                                    size='lg'
                                    borderRadius='15'
                                    width="90%"
                                    secureTextEntry = {!showPassword}
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    InputRightElement={
                                        <IconButton 
                                        icon={<Icon as={Entypo} name={showPassword? "eye" : "eye-with-line"} size={6} color="black"/>}
                                        onPress={() => setShowPassword(!showPassword)}
                                        _pressed={{bg: 'transparent'}}/>
                                    }
                                    />

                                    {errors.password ? <Text style={{color:'red', margin: -10, fontSize: 13}}>{errors.password}</Text> :null}

                                <Text style={{ color: 'black', marginTop: 5, fontWeight: 'bold', textAlign: 'right' }} 
                                onPress={() => props.navigation.navigate("ForgotScreen")}>Forgot Password?</Text>

                                <Button
                                    mt={10}
                                    bg="black"
                                    size="lg"
                                    width='80%'
                                    borderRadius={20}
                                    _text={{
                                        fontSize: 'lg',
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}
                                    onPress={loginPress}
                                >Login</Button>

                            </VStack>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Don't have an account?</Text>

                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                                onPress={() => props.navigation.navigate("SignupScreen")}> Signup</Text>




                        </VStack>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    head: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 230,
        marginBottom: 120
    },
    imbg: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        resizeMode: 'cover',
        flex: 1,
    }

});
