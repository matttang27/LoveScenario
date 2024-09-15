import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Ensure you have the correct path to your image
const sampleProfilePicture = require('@/assets/images/sample-2.png');

export default function ProfileScreen() {
  const [name, setName] = useState('Jane Smith'); // Default name
  const [biography, setBiography] = useState('Hi there! I’m Jane, a passionate traveler and food enthusiast with a love for exploring new cultures and cuisines. I work as a graphic designer and in my free time, you’ll find me hiking trails, experimenting with new recipes, or curled up with a good book.');
  const [profilePicture, setProfilePicture] = useState(sampleProfilePicture); // Use the sample profile picture

  const handleChangeProfilePicture = () => {
    console.log('Change profile picture');
    // Logic to change profile picture (e.g., open image picker) can be implemented here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture Section */}
      <ThemedView style={styles.profilePictureContainer}>
        <TouchableOpacity onPress={handleChangeProfilePicture}>
          <Image source={profilePicture} style={styles.profilePicture} />
        </TouchableOpacity>
      </ThemedView>

      {/* Name Section */}
      <ThemedView style={styles.nameContainer}>
        <ThemedText type="title" style={styles.nameTitle}>Name</ThemedText>
        <TextInput
          style={styles.nameInput}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </ThemedView>

      {/* Biography Section */}
      <ThemedView style={styles.bioContainer}>
        <ThemedText type="title" style={styles.bioTitle}>Biography</ThemedText>
        <TextInput
          style={styles.bioInput}
          value={biography}
          onChangeText={setBiography}
          multiline
          placeholder="Enter your biography here..."
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ffdab9', // Peach Puff background color
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20, // Reduced spacing between profile picture and biography
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#f4978e', // Salmon border color
    backgroundColor: '#ddd',
  },
  changePictureText: {
    marginTop: 10,
    fontSize: 16,
    color: '#f4978e', // Salmon text color
  },
  nameContainer: {
    width: '90%', // Adjusted width for name section
    marginTop: 10, // Spacing between sections
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  nameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f4978e', // Salmon color for the title
  },
  nameInput: {
    height: 40,
    borderColor: '#f08080', // Light Coral border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
  },
  bioContainer: {
    width: '90%', // Adjusted width for wider bio section
    marginTop: 10, // Reduced spacing here
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, // Slightly reduced margin below the title
    color: '#f4978e', // Salmon color for the title
  },
  bioInput: {
    height: 120,
    borderColor: '#f08080', // Light Coral border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    color: '#333',
    fontSize: 16,
  },
});