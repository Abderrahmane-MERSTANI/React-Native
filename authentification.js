import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  
  
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Authentification Screen</Text>
    <TextInput style={styles.input} placeholder="Login" />
    <TextInput style={styles.input} placeholder="Password" />
    <Button title="Login" onPress={() => { /* Handle login logic */ }} />
    </View>
  )
}

const styles = StyleSheet.create({
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