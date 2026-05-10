import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import ContentContainer from "@/components/ContentContainer";
import { TextInput } from "@/components/TextInput";

export default function AddNewScreen() {
  const [itemName, setItemName] = useState("");

  useFocusEffect(
    useCallback(() => {
      setItemName("");
    }, []),
  );

  const handleSubmit = () => {
    router.dismissTo("/");
  };

  return (
    <ContentContainer
      headerTitle="Add New"
      rightAction={{
        icon: "check",
        onPress: handleSubmit,
        show: itemName.trim().length > 0,
      }}
    >
      <TextInput
        autoFocus
        onChangeText={setItemName}
        onSubmit={handleSubmit}
        placeholder="Card Content"
        value={itemName}
      />
    </ContentContainer>
  );
}
