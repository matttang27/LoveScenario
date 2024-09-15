import { ChuWave } from '@/components/chuemoji';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/context/AuthContext';



export default function HomeScreen() {
  
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
    // Navigate to Register Page
  };

  if (isSignedIn) {

    

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
        }>
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
              ]}>
              <ThemedText
                type="default"
                style={[
                  styles.messageText,
                  message.sentByMe ? styles.sentText : styles.receivedText,
                ]}>
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
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <View>
            <Image
              source={require('@/assets/images/flowerbg.png')}
              style={styles.flowerImage}
            />
          </View>
        }>
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
  
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              mAIke love now!
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
    backgroundColor: '#A1CEDC', // Light blue for your messages
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#1D3D47', // Dark blue for their messages
  },
  messageText: {
    fontSize: 16,
  },
  sentText: {
    color: '#000', // Text color for your messages
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
    backgroundColor: '#f4f4f4',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#1D3D47',
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
    paddingVertical:   30,
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