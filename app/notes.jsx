import { Text, View,Modal, StyleSheet, TouchableOpacity, FlatList ,TextInput, Alert} from "react-native";
import { router } from 'expo-router';
import { useEffect, useState } from "react";

import TextModal from "../components/TextModal";

const Notes = () => {
  const [verses, setVerses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNotes, setNewNotes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    setIsLoading(true);
   
      const response= await noteService.getNotes();
      if (response.error) {
        setError(response.error);
        Alert.alert("Error", response.error);
      }else {
        setVerses(response.data);
        setError(null);
      }
      setIsLoading(false);}

  const addNote = () => {
    if (newNotes.trim()== '') return; // Prevent adding empty notes
     setVerses(( prevVerses )=> 
      [...prevVerses, { id: Date.now().toString(), text: newNotes }
      ]);
      setNewNotes('');
      setModalVisible(false); // Close the modal after adding
  };
  return (
    <View style={styles.container}>
      <NoteList notes={verses} />

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
        <Text style={styles.addmain}>Add</Text>
      </TouchableOpacity>

      <TextModal setModalVisible={setModalVisible} 
       modalVisible={modalVisible} 
       setNewNotes={setNewNotes} 
       newNotes={newNotes} 
       addNote={addNote} />
     
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
 
 
  addmain: {
    postion: 'absolute',
    fontSize: 18,
    color: '#000000ff',
    
  
  },
  button: {
    postion: 'absolute',
    backgroundColor: 'lightgray',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    bottom: 20,
    
    alignItems: 'center',
  },
   
    
});

export default Notes;