import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Video } from 'expo-av';
import Main from './src/globalPage/main';


export default function App() {
  return (
<SafeAreaView style={{width:"100%", height:"100%"}}>
     <Main/>
      <StatusBar style="auto" />
  </SafeAreaView>
  );
}

