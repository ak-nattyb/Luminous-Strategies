import ContentContainer from "@/components/ContentContainer";
import { FlippableCard } from "@/components/FlippableCard";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function Tab() {
  return (
    <FlippableCard
      value={
        "Short circuit (If eating peas improves virility, shovel them into your pants)"
      }
    ></FlippableCard>
  );
}
