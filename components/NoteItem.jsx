import {Text,View,StyleSheet } from "react-native";
const NoteItem = ({ note }) => {
    return( 
    <View style={styles.verselist}>
            <Text style={styles.versetext}>{note.text}</Text>
          </View>
          );}
  const styles = StyleSheet.create({
    versetext: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    margin: 10,
  },
  verselist:{
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2, 
    }});

export default NoteItem;