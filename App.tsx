import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type StatsProps = {
  label: string;
  value: string | number;
};

const Stats = ({ label, value }: StatsProps) => {
  return (
    <View style={styles.valueContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <Stats label={"Steps"} value={"1000"} />
        <Stats label={"Distance"} value={"0.75 km"} />
      </View>

      <Stats label={"Flights Climbed"} value={"20"} />

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
  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    color: "#AFB3BE",
    fontSize: 35,
    fontWeight: "500",
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
});
