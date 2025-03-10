// import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Onae</Text>
      <Text className="text-red-700">2222</Text>
      <Text className="bg-red-500 text-white p-2">紅色背景</Text>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}

      {/* <SafeAreaProvider>
    <SafeAreaView >
      <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />
          </SafeAreaView>
        </SafeAreaProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
