import { router } from "expo-router";
import ContentContainer from "@/components/ContentContainer";
import { StyledButton } from "@/components/StyledButton";

export default function SelectOptionScreen() {
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
      <StyledButton
        onPress={() =>
          router.push({
            pathname: "/add-new",
          })
        }
        text="Settings"
      />
    </ContentContainer>
  );
}
