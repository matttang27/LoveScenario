import React, { useEffect, useState } from 'react'; // Import useEffect and useState from 'react'
import { Image, TextInput, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChuWave } from '@/components/chuemoji';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useAuth } from '@/context/AuthContext';

export default function HomeScreen() {
  const router = useRouter();
  const { isSignedIn, signIn } = useAuth();
  console.log(isSignedIn);
  const [messages, setMessages] = useState<{ text: string; sentByMe: boolean }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (isSignedIn) {
      setMessages([
        { text: 'Hey! How are you?', sentByMe: false },
        { text: 'I’m good, how about you?', sentByMe: true },
        { text: 'Doing well, thanks!', sentByMe: false },
      ]);
    }
  }, [isSignedIn]);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sentByMe: true }]);
      setNewMessage('');
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn();
  };

  const handleRegister = () => {
    router.push('register'); // Navigate to RegisterScreen
  };

  if (isSignedIn) {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#ffdab9', dark: '#1D3D47' }}
        headerImage={
          <View>
            <Image
              source={require('@/assets/images/flowerbg.png')}
              style={styles.flowerImage}
            />
          </View>
        }
      >
        {/* Header with chat partner's name */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Chat with Emma</ThemedText>
        </ThemedView>

        {/* Chat Messages */}
        <ScrollView contentContainerStyle={styles.chatContainer}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.sentByMe ? styles.sentMessage : styles.receivedMessage,
              ]}
            >
              <ThemedText
                type="default"
                style={[
                  styles.messageText,
                  message.sentByMe ? styles.sentText : styles.receivedText,
                ]}
              >
                {message.text}
              </ThemedText>
            </View>
          ))}
        </ScrollView>

        {/* Input and Send Button */}
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type your message..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Send
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ParallaxScrollView>
    );
  } else {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#ffdab9', dark: '#1D3D47' }}
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
          <ThemedText type="title">Love Scenario</ThemedText>
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

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Match now!
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerContainer}>
            <ThemedText type="default">Don't have an account?</ThemedText>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Register
              </ThemedText>
            </TouchableOpacity>
          </TouchableOpacity>
        </ThemedView>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  chatContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  messageContainer: {
    marginVertical: 10,
    maxWidth: '75%',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#f4978e', // Salmon for your messages
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f08080', // Light Coral for their messages
  },
  messageText: {
    fontSize: 16,
  },
  sentText: {
    color: '#fff', // Text color for your messages
  },
  receivedText: {
    color: '#fff', // Text color for their messages
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    backgroundColor: '#ffdab9', // Peach Puff for the input area
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#f4978e', // Salmon for the send button
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
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
    backgroundColor: '#ffdab9', // Peach Puff for the auth container
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
  button: {
    backgroundColor: '#f4978e', // Salmon for the login button
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: '#f4978e', // Salmon for the register button
    borderRadius: 8,
    paddingVertical: 8, // Adjusted to fit text better
    paddingHorizontal: 20, // Added padding to ensure the text fits well
    alignItems: 'center',
    marginTop: 10,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#ffdab9', // Peach Puff for the register container background
    padding: 10, // Add some padding for better spacing inside the container
    borderRadius: 12, // This will make the container corners rounded
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
});
