import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Input, Button, VStack, ScrollView } from 'native-base'

export default function ForgotScreen() {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <ImageBackground source={require("../assets/mainbg.jpg")} style={styles.imgbg} >
                    <View style={styles.mainView}>
                        <VStack space={2}>

                            <Input
                                style={styles.mainView}
                                placeholder='Please Enter your Email'
                                color='black'
                                fontSize='lg'
                                borderRadius='15'
                                backgroundColor='#f8f1f1'
                                size={'lg'}
                                mb={2}
                                mt={150}


                            />

                            <Button
                                bg="#8c52ff"
                                size='lg'
                                borderRadius='10'
                                _text={{
                                    fontSize: 'lg',
                                    fontWeight: 'bold'
                                }}

                            >Submit</Button>
                        </VStack>

                    </View>

                </ImageBackground>
            </ScrollView>

        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({

    imgbg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        resizeMode: 'cover'
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: true,
        margin: 20
    },


})