import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Box, Button, HStack, Input, NativeBaseProvider, VStack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function SignupScreen(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signupPress = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please complete all the required fields');
        } else if (password !== confirmPassword) {
            Alert.alert('Error', 'Please ensure that both passwords match');
        } else {

           let form = {
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Password: password
            }
            console.log(form);
            props.navigation.navigate("MainScreen");
        }
    }

    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>

                    <ImageBackground source={require("../assets/main.jpg")} style={styles.imbg}>
                        <VStack style={{ alignItems: 'center', margin: 15 }}>
                            <Text style={styles.head}>Signup</Text>

                            <VStack space={4} width="100%" alignItems="center" mt={30}>
                                <HStack space={2}>
                                    <Input
                                        placeholder='First Name'
                                        variant='outline'
                                        color={'black'}
                                        backgroundColor='#FAF9F6'
                                        size='lg'
                                        borderRadius='15'
                                        width="45%"
                                        value={firstName}
                                        onChangeText={text => setFirstName(text)}
                                    />

                                    <Input
                                        placeholder='Last Name'
                                        variant='outline'
                                        color={'black'}
                                        backgroundColor='#FAF9F6'
                                        size='lg'
                                        borderRadius='15'
                                        width="45%"
                                        value={lastName}
                                        onChangeText={text => setLastName(text)}
                                    />
                                </HStack>

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

                                <Input
                                    placeholder='Password'
                                    variant='outline'
                                    color={'black'}
                                    backgroundColor='#FAF9F6'
                                    size='lg'
                                    borderRadius='15'
                                    width="90%"
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    secureTextEntry
                                />

                                <Input
                                    placeholder='Confirm Password'
                                    variant='outline'
                                    color={'black'}
                                    backgroundColor='#FAF9F6'
                                    size='lg'
                                    borderRadius='15'
                                    width="90%"
                                    value={confirmPassword}
                                    onChangeText={text => setConfirmPassword(text)}
                                    secureTextEntry
                                />

                                <Button
                                    mt={5}
                                    bg="black"
                                    size="lg"
                                    width='80%'
                                    borderRadius={20}
                                    _text={{
                                        fontSize: 'lg',
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}
                                    onPress={signupPress} 
                                >
                                    Signup
                                </Button>
                            </VStack>

                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>Already have an account?</Text>

                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                                onPress={() => props.navigation.navigate("LoginScreen")} 
                            >
                                Login
                            </Text>
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
        marginBottom: 80
    },
    imbg: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        resizeMode: 'cover',
        flex: 1,
    }
});
