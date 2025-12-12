import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [cont,setCont] = useState(null);

  const increment = async () => {
    setCont((cont + 1) * 1);
  }

  const desincremment = async () => {
    setCont((cont - 1) * 1);
  }
  return (
    <View style={styles.container}>
        <Button title="increment" onPress={increment} />
        <Button title="desincremment" onPress={desincremment} />
        <Text style={{color:"#F00"}}>{cont}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error:{
    color:"rgba(253, 251, 251, 1)",
    marginBottom:10,
    backgroundColor:"rgba(241, 12, 12, 1)",
    padding:5,
  },
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 200,
    marginBottom: 15,
    borderRadius: 5,
  },
});
