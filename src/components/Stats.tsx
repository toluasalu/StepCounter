import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type StatsProps = {
  label: string;
  value: string | number;
};

const Stats = ({ label, value }: StatsProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 20,
  },
  value: {
    color: "#AFB3BE",
    fontSize: 45,
    fontWeight: "500",
  },
});

export default Stats;
