import { StyleSheet, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

export function ChuWave() {
  const rotationAnimation = useSharedValue(0);

  // Configure the animation to repeat
  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  // Apply rotation to the PNG image
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Animated.Image
        source={require('@/assets/images/chu-removebg-preview.png')} // Update this path to your PNG
        style={styles.image} // Apply any additional styles to the image
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 145,  // Customize the size as needed
    height: 145, // Customize the size as needed
  },
});