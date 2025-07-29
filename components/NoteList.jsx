import { Text, View, FlatList } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => (
  <FlatList
    data={notes}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <NoteItem note={item} />}
  />
);

export default NoteList;