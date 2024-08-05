import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAssets } from 'expo-asset';
import { Video } from 'expo-av';


export default function Main() {
  // const [assets] = useAssets([require('../fintech-clerk/assets/fonts/SpaceMono-Regular.ttf')])
  const [assets] = useAssets([require('../../assets/videos/intro1.mp4')])
  return (
    <View style={styles.container}>
      {assets && (
        <Video 
        isMuted
        isLooping
        shouldPlay
        resizeMode = "cover"
        source={{uri: assets[0].uri}}
        style={styles.video}
        />
      )}
      <View style={{padding:20}}>
        <Text style={styles.header}>Welcome to the app</Text>
      </View>
     <View style={styles.buttons}>
      <TouchableOpacity>
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  video:{
      position: 'absolute',
      top: 0,
      left: 0,
      alignItems:"center",
      bottom: 0,
      right: 0,
      height: "100%",
  },
  header:{
    fontSize:30,
    color:"#444444",
    textTransform:"uppercase"
  },
  buttons:{
    flexDirection:"row",
    justifyContent:'center',
    padding:20,
    gap:20
  }
});
