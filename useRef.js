import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
    const zdt = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            zdt.current.focus();
        }, 500);
    }, []);

  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nom" ref={zdt} />
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
