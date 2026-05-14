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
            pathname: "/confirm",
            params: {
              title: "Reset Cards",
              message:
                "Are you sure you want to delete all of your custom cards?",
              confirmText: "YES",
              action: "string",
              returnPath: "/",
            },
          })
        }
        text="Reset Cards"
      />
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
