import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const lists = [
    { id: 1, house: "Villa", location: 'Beverly Hills' },
    { id: 2, house: "Apartment", location: 'New York' },
    { id: 3, house: "Cottage", location: 'Lake District' },
    { id: 4, house: "Mansion", location: 'Los Angeles' },
    { id: 5, house: "Bungalow", location: 'Florida' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          thndev05 - learning React Native.
        </Text>

        <TextInput 
          placeholder="Enter something ..." 
          placeholderTextColor="#888" 
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 20,
            marginTop: 16,
            borderRadius: 8,
          }}
        />
        
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            padding: 16,
            marginTop: 16,
            borderRadius: 8,
            alignItems: "center",
          }}

          onPress={() => alert("Button pressed!")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Click!</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.house}</Text>
            <Text style={{ fontSize: 14, color: "#666" }}>{item.location}</Text>
          </View>
        )}
      />

    </SafeAreaView>
  )
}
