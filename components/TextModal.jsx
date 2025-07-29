import { Text, View,Modal, StyleSheet, TouchableOpacity, FlatList ,TextInput} from "react-native";
const TextModal = ({ modalVisible,setModalVisible,setNewNotes,newNotes,addNote}) =>{
  return (
    <Modal 
          visible={modalVisible}
          animationType="slide"  
       
            onRequestClose={() => setModalVisible(false)}
          >
            
          <View style={styles.modalOver}>
            
            
    
          <TextInput
            style={styles.input}
            placeholder="Enter new verse"   
            placeholdercolor="#888"
            value={newNotes}
            onChangeText={setNewNotes}
           
          />
    
          <View style={styles.modalbutton}>
            <TouchableOpacity  onPress={() => setModalVisible(false)}>
            
            <Text style={styles.cancel}>cancel</Text>
           
            </TouchableOpacity>
    
            <TouchableOpacity  onPress={addNote} > 
           
            <Text style={styles.add}>Save</Text>
    
            </TouchableOpacity>
            
            </View>
            
            </View>
            
            </Modal>);

}
const styles = StyleSheet.create({
  modalOver: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
      
        borderRadius: 10,
        padding: 20,
    },
    modalbutton: {
      justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        
        marginTop: 20,
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },  
    cancel: {
        fontSize: 16,
         borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    add: {
        fontSize: 16,
         borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
export default TextModal;