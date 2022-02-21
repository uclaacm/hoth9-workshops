import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {


  const[duckState, setDuckState] = useState("Duck")

  
  // const[imageState, setImageState] = useState("./assets/DuckKnife.jpg")

  // //function setDuckState
  // function makeDuck() {
  //   setDuckState("Duck.")
  // }

  // function removeDuck() {
  //   setDuckState("Not a duck.")
  // }

  return (
    <View style={styles.container}>
      <Image style={styles.duckImage} source={require("./assets/DuckKnife.jpg")} />
      <Text style={styles.duckOutputContainer}> {duckState}</Text>
      <View style={styles.containerShared}>
        <TouchableOpacity style={styles.duckContainer} onPress={()=>
          setDuckState("Duck.")
        }>
          <Text>Duck!</Text>
        </TouchableOpacity>
        
        {/* How does one put a space here in between the buttons? Unsure. */}

        <TouchableOpacity style={styles.duckContainer} onPress={()=>
          setDuckState("Not a duck.")
        }>
          <Text>No more duck!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#068dd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  duckContainer: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  duckOutputContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  containerShared: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: 10,
  },

  duckImage: {
    borderColor: 'black',
    borderWidth: 5,
  }
  

});
