import { Text, View,StyleSheet,Image,TouchableOpacity } from "react-native";
import {useRouter} from "expo-router";

const Home =()=> {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/star.png')} style={styles.image} />
    
      <Text> “In a world chasing noise, he built quietly—line by line, block by block. One day, the world paused... and listened.”</Text>

    <TouchableOpacity style={styles.button}onPress={() => router.push('/notes')}>
      <Text style={styles.text}>Create notes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => router.push('/about')}>
      <Text style={styles.text}>Go to About</Text></TouchableOpacity>
          </View>
  );  
}
const styles= StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 40,
      fontWeight: "bold",
     
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      borderRadius:5,
      fontStyle: "italic",
      padding: 20,
      margin: 10,
      textAlign: "center",
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      color: "#333",
      textAlign: "center",
      margin: 10,
  },
button: {
  backgroundColor: "lightgray",
  padding: 10,
borderRadius: 9,
  marginVertical: 5,
  width: "60%",
  height: "11%",
  
  alignItems: "center",
},
});
export default Home;