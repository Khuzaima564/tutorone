import { View, Text, AppRegistry } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, Header } from '@react-navigation/stack'
import { Button, NativeBaseProvider } from 'native-base';
import SplashScreen from './src/screen/SplashScreen';
import SignupScreen from './src/screen/SignupScreen';
import LoginScreen from './src/screen/LoginScreen';
import { name as appName } from './app.json';
import IntroScreen from './src/screen/IntroScreen';
import ForgotScreen from './src/screen/ForgotScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import DiscoverScreen from './src/screen/DiscoverScreen';
import InboxScreen from './src/screen/InboxScreen';
import Iconicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();


function CreateScreen() {
  return(
    <Text>Create</Text>
  )
}


function ProfileScreen(prop:any) {
  return(
    <View style={{backgroundColor: 'black', flex: 1 , justifyContent: 'center' , alignItems: 'center'}}> 
      <Feather name="user" size={120} color="white" />
      <Text style={{color: 'white', fontSize: 20, marginBottom: 15, marginTop: 10}}>Sign up for an account</Text>
      <Button
      bg="#FF0000"
      width='80%'
      height='6%'
      _text={{
        fontSize: 'lg',
        fontWeight: 'bold'
      }}
      onPress= {() => prop.navigation.navigate("SignupScreen")}>Sign up</Button>
    </View>
  )
}



function MainScreen(){
  return(
    <TabNav.Navigator screenOptions={{headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#efe3e3',
      tabBarStyle:{
        backgroundColor: 'black',
        padding: 10,
        height: "7%",
    
      },
      tabBarLabelStyle: {
        fontSize: 13, 
      },
    }}>

    <TabNav.Screen name='Home' component={HomeScreen}
    options={{
      tabBarIcon: ({color, size }) => (
        <Iconicons name="home"  color={color}  size={size} />
      ),
}}/>

    <TabNav.Screen name='Discover' component={DiscoverScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <Iconicons name="compass-outline"color={color} size={size}/>
      ),
    }}
    />


    <TabNav.Screen name='Create' component={CreateScreen} options={{title: '',
      tabBarIcon : ({color, size}) => (
        <Entypo name = "squared-plus" color={color} size={35}/>
      ),
    }}
    />

    <TabNav.Screen name='Inbox' component={InboxScreen}
    options={{
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="comment-minus-outline"  color={color} size={size}/>
      ),
    }}/>

    <TabNav.Screen name='Profile' component={ProfileScreen} 
    options={{
      tabBarIcon: ({color, size}) => (
        <Feather name="user" color={color} size={size}/>
      ),
    }}/>
    
    </TabNav.Navigator>

  ) 
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName='splashScreen' screenOptions={{headerShown:false}} >
          <Stack.Screen name='SplashScreen' component={SplashScreen}  />
          <Stack.Screen name="IntroScreen" component={IntroScreen}/>
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        </Stack.Navigator>

      </NativeBaseProvider>
    </NavigationContainer>
  )
}
AppRegistry.registerComponent(appName, () => App);
