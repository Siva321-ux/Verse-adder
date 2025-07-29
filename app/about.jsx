import { Text, View,StyleSheet,Image,TouchableOpacity } from "react-native";
import { router } from 'expo-router';
const About = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>About Verse</Text>
      <Text style={styles.description}>
        Verse is a platform for creating and sharing notes, designed to help you capture your thoughts and ideas effortlessly.
      </Text>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.button}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },   })       
export default About;