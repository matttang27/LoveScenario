import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native"; // Fix here

export default function App() {
    return (  
        <AuthProvider>
            <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
        </AuthProvider>  
        
    );
}
