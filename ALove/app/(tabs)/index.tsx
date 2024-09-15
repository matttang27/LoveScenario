  import { useState } from 'react';
  import { Image, TextInput, StyleSheet, View } from 'react-native';
  import { useRouter } from 'expo-router';
  import { ChuWave } from '@/components/chuemoji';
  import { ThemedText } from '@/components/ThemedText';
  import { ThemedView } from '@/components/ThemedView';
  import ParallaxScrollView from '@/components/ParallaxScrollView';

  export default function HomeScreen() {
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
          <View>
            <Image
              source={require('@/assets/images/flowerbg.png')}
              style={styles.flowerImage}
            />
          </View>
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Fake Love</ThemedText>
          <ChuWave />
        </ThemedView>

        <ThemedView>
          <ThemedText type="defaultSemiBold">Finding a match doesn't have to be hard.</ThemedText>
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
      backgroundColor: '#f4f4f4',
      padding: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    flowerImage: {
      width: 380,
      height: 295,
      resizeMode: 'contain',
    },
    separatorLine: {
      height: 1, // Thickness of the line
      backgroundColor: 'black', // Black line color
      marginTop: 10, // Space between the image and the line
    },
  });