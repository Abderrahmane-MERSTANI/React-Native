import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handlePress = async () => {
    try {
      const response = await axios.post("https://10.128.254.154/poo/API/Postman.php", {
        nom,
        prenom,
        login,
        password,
        repassword
      }).then(res => {console.log(res.data);});
    } catch (error) {
      error=>console.log("Erreur axios :", error);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentification Screen</Text>
      <Text style={styles.error}>Inscription invalide</Text>
      <TextInput style={styles.input} placeholder="Nom"  onChangeText={setNom} />
      <TextInput style={styles.input} placeholder="Prenom" onChangeText={setPrenom} />
      <TextInput style={styles.input} placeholder="Login" onChangeText={setLogin} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Re Password" onChangeText={setRepassword} />
      <Text>{nom} {prenom} {login} {password} {repassword}</Text>

      <Button title="Login" onPress={handlePress} />
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
