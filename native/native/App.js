import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [data, setData] = useState(' ');
  const click = () => {
    let name =alert('ok');
    [...setData, name];

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text onPress={click}>Hello World</Text>
      {/* {data.map((person)=>{
        <Text>{person}</Text>
      })} */}
      <Text>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
