import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Sample profile with a local PNG image
const profiles = [
  {
    id: 1,
    name: 'John Doe',
    description: 'This is a sample bio for John Doe. He loves hiking and outdoor adventures.',
    imageUri: require('@/assets/images/sample-1.png'), // Update this path to your PNG image location
  },
  ...Array.from({ length: 19 }, (_, i) => ({
    id: i + 2,
    name: `Profile ${i + 2}`,
    description: `This is the description for profile ${i + 2}.`,
    // Replace with actual image URIs or local image sources
    imageUri: require('@/assets/images/default.png'),
  })),
];

export default function RatingScreen() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [rating, setRating] = useState<number | null>(null);

  const handleRating = (score: number) => {
    setRating(score);
    setTimeout(() => {
      if (currentProfileIndex < profiles.length - 1) {
        setCurrentProfileIndex(currentProfileIndex + 1);
        setRating(null); // Reset rating for the next profile
      } else {
        // Implement navigation or action for when all profiles are rated
        console.log('All profiles rated');
      }
    }, 500); // Short delay for transition effect
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={currentProfile.imageUri} style={styles.profileImage} />
        <Text style={styles.name}>{currentProfile.name}</Text>
        <Text style={styles.description}>{currentProfile.description}</Text>
        <Text style={styles.counter}>
          Profile {currentProfileIndex + 1} of {profiles.length}
        </Text>

        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(score => (
            <TouchableOpacity
              key={score}
              style={styles.ratingButton}
              onPress={() => handleRating(score)}
            >
              <Text style={styles.ratingText}>{score}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {currentProfileIndex === profiles.length - 1 && (
          <TouchableOpacity
            style={styles.finishButton}
            onPress={() => {
              // Implement the finish action here
              console.log('Finish button pressed');
            }}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffdab9', // Peach Puff background
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#fff', // White background for profile container
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fbc4ab', // Light Coral border around the profile image
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D3D47', // Dark Blue text color for the name
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark text color for the description
  },
  counter: {
    fontSize: 16,
    marginBottom: 20,
    color: '#1D3D47', // Dark Blue text color for the counter
  },
  ratingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ratingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f4978e', // Salmon color for rating buttons
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  ratingText: {
    color: '#fff',
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#f08080', // Light Coral color for Finish button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
