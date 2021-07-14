import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {

  const [randomColor, setRandomColor] = useState("black");

  const changeBg = ()=>{
    let color = "rgb(" + Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + ")";
    
    setRandomColor(color);
  }

  return (
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={changeBg}>
        <Text style={styles.text}>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRandomColor("black")}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
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
  text:{
    fontSize: 20,
    fontStyle: 'italic',
    backgroundColor: '#6A1B4D',
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: '#eee',
    textTransform: 'uppercase',
    borderRadius: 15,
    marginTop: 10
  }
});

export default App;