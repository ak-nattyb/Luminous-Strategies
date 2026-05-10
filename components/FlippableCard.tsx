import { TextInput as RNTextInput, StyleSheet, View } from "react-native";
import { useInvertColors } from "@/contexts/InvertColorsContext";
import { n } from "@/utils/scaling";
import { StyledText } from "./StyledText";

interface FlippableCardProps {
  onPress?: () => void;
  value: string;
}

export function FlippableCard({ onPress, value }: FlippableCardProps) {
  const { invertColors } = useInvertColors();

  const textColor = invertColors ? "black" : "white";
  const borderColor = invertColors ? "black" : "white";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <StyledText style={styles.text}>{value}</StyledText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: n(400),
    height: n(300),
    borderRadius: n(50),
    borderWidth: 1,
    borderColor: "#FFF",
  },
  text: {
    textAlign: "center",
    fontSize: n(25),
    padding: n(10),
  },
});
