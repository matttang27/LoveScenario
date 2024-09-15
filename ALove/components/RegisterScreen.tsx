import { useState } from 'react';
import { TextInput, StyleSheet, View, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Assuming you're using expo-router

export default function RegisterScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [biography, setBiography] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [age, setAge] = useState('');
  const [religion, setReligion] = useState('');

  const handleRegister = () => {
    // Handle registration here
    // On successful registration, navigate back to the main menu
    router.push('/home'); // Update to your main menu route
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <TextInput
          style={[styles.input, styles.biographyInput]}
          value={biography}
          onChangeText={setBiography}
          placeholder="Biography"
          multiline
        />
        <TextInput
          style={styles.input}
          value={ethnicity}
          onChangeText={setEthnicity}
          placeholder="Ethnicity"
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={religion}
          onChangeText={setReligion}
          placeholder="Religion"
        />
      </View>
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  biographyInput: {
    height: 100, // Adjust as needed for the biography input
  },
});