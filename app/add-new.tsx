import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import ContentContainer from "@/components/ContentContainer";
import { TextInput } from "@/components/TextInput";
import { useCardContent } from "@/contexts/CardContentContext";

export default function AddNewScreen() {
  const [itemName, setItemName] = useState("");
  const { addCardContent } = useCardContent(); //import card list and the ability to change context from here

  useFocusEffect(
    useCallback(() => {
      setItemName("");
    }, []),
  );

  const handleSubmit = () => {
    addCardContent(itemName);
    router.push({
      pathname: "/",
      params: {
        customCard: itemName,
        setFlip: "true",
      },
    });
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
