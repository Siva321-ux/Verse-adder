import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "gray",
        },
       
        headerTitleStyle: {
          fontWeight: "bold",
         
          fontSize: 24,
          color: "white",
        },
        headerTitleAlign: "center",
        contentStyle: { flex: 1, backgroundColor: "lightgray" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Whatever" }} />
       <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
    </Stack>
  );
}