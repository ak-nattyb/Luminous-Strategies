import { router } from "expo-router";
import ContentContainer from "@/components/ContentContainer";
import { StyledButton } from "@/components/StyledButton";
import { useCardContent } from "@/contexts/CardContentContext";

export default function SelectOptionScreen() {
  const { resetCardContent } = useCardContent(); //import card list and the ability to change context from here

  return (
    <ContentContainer headerTitle="Options" contentGap={20}>
      <StyledButton
        onPress={() =>
          router.push({
            pathname: "/add-new",
          })
        }
        text="Add New Card"
      />
      <StyledButton onPress={resetCardContent} text="Reset Cards" />
      <StyledButton
        onPress={() =>
          router.push({
            pathname: "/settings",
          })
        }
        text="Settings"
      />
    </ContentContainer>
  );
}
