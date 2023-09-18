import { StyleSheet, Text, View } from "react-native";
import SVG, { Circle } from "react-native-svg";

type RingProgressProps = {
  radius?: number;
};

const color = "#EE0F55";

const RingProgress = ({ radius = 100 }: RingProgressProps) => {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        backgroundColor: color,
        opacity: 0,
      }}
    >
      <SVG>
        <Circle r={radius} fill={color} />
      </SVG>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RingProgress;
