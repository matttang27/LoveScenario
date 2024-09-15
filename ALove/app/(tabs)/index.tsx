import { useState, useEffect, useContext} from 'react';
import { Image, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ChuWave } from '@/components/chuemoji';

//import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

//const Stack = createStackNavigator();



export default function HomeScreen() {
  //const { isSignedIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login (connect with backend)
  };

  const handleRegister = () => {
    // Navigate to Register Page
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/rose-background.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Artificial Love</ThemedText>
        <ChuWave />
      </ThemedView>

      <ThemedView>
        <ThemedText type="subtitle">The new and better Tinder</ThemedText>
      </ThemedView>

      {/* Login Section */}
      <ThemedView style={styles.authContainer}>
        <ThemedText type="subtitle" style={styles.authTitle}>
          Login
        </ThemedText>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <ThemedView style={styles.button} onPress={handleLogin}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            mAIke love now!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.registerContainer}>
          <ThemedText type="default">Don't have an account?</ThemedText>
          <ThemedView style={styles.registerButton} onPress={handleRegister}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Register
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  authContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  authTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1D3D47',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: '#1D3D47',
    borderRadius: 8,
    paddingVertical: 8, // Adjusted to fit text better
    paddingHorizontal: 20, // Added padding to ensure the text fits well
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Add background color if you want the rounded corners to be visible
    padding: 10, // Add some padding for better spacing inside the container
    borderRadius: 12, // This will make the container corners rounded
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
}); 