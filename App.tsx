import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stats from "./src/components/Stats";
import RingProgress from "./src/components/RingProgress";

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress />

      <View style={styles.valueContainer}>
        <Stats label={"Steps"} value={"1000"} />
        <Stats label={"Distance"} value={"0.75 km"} />
        <Stats label={"Flights Climbed"} value={"20"} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 12,
    justifyContent: "center",
  },

  valueContainer: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
  },
});
