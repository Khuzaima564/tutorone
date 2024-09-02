import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const slides = [
  {
    key: '1',
    Image: require('../assets/slider1.jpg')
  },
  {
    key: '2',
    Image: require('../assets/slider2.jpg')
  },
  {
    key: '3',
    Image: require("../assets/slider3.jpg")

  },

];

const renderSkipButton = () => (
  <View style={{
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  }}>
    <Text style={{
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
    }}>Skip</Text>
  </View>
);

const renderDoneButton = () => (
  <View style={{
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  }}>
    <Text style={{
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
    }}>Done</Text>
  </View>
);

const renderNextButton = () => (
  <View style={{
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  }}>
    <Text style={{
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold'
    }}>Next</Text>
  </View>
);

const renderSlide = ({ item }) => (
  <View style={{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }}>
    <Image source={item.Image}
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        resizeMode: 'cover'
      }} />
  </View>
);

export default function IntroScreen(props) {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    const checkIfFirstLaunched = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        if (hasLaunched) {
          props.navigation.replace("MainScreen");
        } else {
          setShowSlider(true);
        }
      }
      catch (error) {
        console.warn('Failed to check or set AsyncStorage item:', error)
      }
    };
    checkIfFirstLaunched();
  },
    [props.navigation]);





  const onDone = async () => {
    await AsyncStorage.setItem('hasLaunched', 'true');
    props.navigation.replace("MainScreen")
  };

  const onSkip = async () => {
    await AsyncStorage.setItem('hasLaunched', 'true');
    props.navigation.navigate("MainScreen")
  }

  return showSlider ? (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slides}
      onDone={onDone}
      onSkip={onSkip}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      showSkipButton={true}
      showNextButton={true}
      showDoneButton={true}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle} />
  ) : null;

}
const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: '#8c52ff'
  },
  activeDotStyle: {
    backgroundColor: 'black'
  }


})
