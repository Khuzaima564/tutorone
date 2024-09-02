import { NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const images = [
  { id: '1', 
    source: require('../assets/image01.jpg'), 
    UserName: 'SunnyDays',
    caption:  'Chasing sunsets and dreams 🌅✨', 
    likes: "13.1k", 
    comments: 191, 
    save: 970, 
    shares: '3,619', 
  },

  { id: '2', 
    source: require('../assets/image02.jpg'), 
    UserName: 'UrbanExplorer',
    caption:  'City lights and late-night vibes 🌃🚀',
    likes: "1.5M", 
    comments: '45k', 
    save: '1.2k', 
    shares: 952, 
  },

  { id: '3', 
    source: require('../assets/image03.jpg'), 
    UserName: 'AdventureSeeker', 
    caption:  'Every day is a new adventure waiting to unfold 🏞️🌟',
    likes: "348k", 
    comments: '3.4k', 
    save: 666, 
    shares: '7.8k', 
  },

  { id: '4', 
    source: require('../assets/image04.jpg'), 
    UserName: 'FoodieDelight', 
    caption:  'Savoring every bite, one delicious moment at a time 🍣🍰',
    likes: 280, 
    comments: 15, 
    save: 5, 
    shares: 14, 
  },
];

const ImageViewer = ({ source }) => (
  <Image
    source={source}
    style={{ height: '100%', width: '100%' }}
    resizeMode='cover'
  />
);

const HomeScreen = () => {

  const [likeColor ,setLikeColor] =useState ({});
  const [SaveColor ,setSaveColor] = useState ({});

  const toggleLikeColor = (id) => {
    setLikeColor ((prev) => ({
      ...prev,
      [id]: prev[id] === 'white' ? 'red' : 'white',
    }));
  };



  const toggleSaveColor = (id) => {
    setSaveColor ((prev) => ({
      ...prev,
      [id]: prev[id] === 'white' ? 'orange' : 'white',
    }));
  };

  const renderItem = ({ item }) => (
    <View style={{ height: height, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <ImageViewer source={item.source} />


      <View style={{position: 'absolute', justifyContent: 'center', left: 10, top: '80%'}}>
          <Text style={styles.user}>{item.UserName}</Text>
          <Text style={styles.captionT}>{item.caption}</Text>
        </View>

      <View style={styles.mainView}>

       

        <TouchableOpacity style={styles.iconView} onPress = {() => toggleLikeColor(item.id)}>
          <FontAwesome name="heart" size={35} color= {likeColor[item.id] || "white"} />
          <Text style={styles.iconText}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconView}>
          <FontAwesome name="comment" size={35} color="white" />
          <Text style={styles.iconText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconView} onPress = {() => toggleSaveColor(item.id)}>
          <FontAwesome name="bookmark" size={35} color={SaveColor[item.id] || "white" }/>
          <Text style={styles.iconText}>{item.save}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconView}>
          <Ionicons name="arrow-redo-sharp" size={35} color="white" />
          <Text style={styles.iconText}>{item.shares}</Text>
        </TouchableOpacity>

      </View>

    </View>
  );

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToInterval={height}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          pagingEnabled
        />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#524d4d',
  },

  mainView: {
    position: 'absolute',
    right: 10,
    top: '38%',
    justifyContent: 'center',
  },

  iconView: {
    alignItems: 'center',
    marginBottom: 35,
  },

  iconText: {
    color: 'white',
    marginTop: 5,
  },
  user: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16
  },
  captionT: {
    color: 'white',
    fontSize: 14,
    marginTop: 5
  }
});
