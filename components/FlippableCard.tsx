import { Animated, StyleSheet, View } from "react-native";
import { n } from "@/utils/scaling";
import { StyledText } from "./StyledText";
import { useRef, useState } from "react";
import { HapticPressable } from "./HapticPressable";
import { router } from "expo-router";
import { useCardContent } from "@/contexts/CardContentContext";

export function FlippableCard() {
  const { cardContent } = useCardContent(); //import card list and the ability to change context from here

  const [isFlipped, setIsFlipped] = useState(false);

  const flipAnim = useRef(new Animated.Value(0)).current;

  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * (cardContent.length - 1)),
  );

  function refreshCard() {
    //find old var
    const previousIndex = randomIndex;

    //create new var
    let newIndex = Math.floor(Math.random() * (cardContent.length - 1));

    //check for non-identical value
    if (cardContent.length > 1) {
      while (newIndex == previousIndex) {
        newIndex = Math.floor(Math.random() * (cardContent.length - 1));
      }
    }
    setRandomIndex(newIndex);
  }

  function flipCard() {
    if (isFlipped) {
      refreshCard();
    }

    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  }

  function navigateToAddPage() {
    router.navigate("./select-option");
  }

  const frontRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backRotate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  // Hide the back face of each card mid-flip
  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 0.5, 1],
    outputRange: [1, 1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 0.5, 1],
    outputRange: [0, 0, 1, 1],
  });

  return (
    <View style={styles.container}>
      <HapticPressable onPress={flipCard} onLongPress={navigateToAddPage}>
        {/* Front */}
        <Animated.View
          style={[
            styles.card,
            styles.cardFront,
            { opacity: frontOpacity, transform: [{ rotateY: frontRotate }] },
          ]}
        >
          <StyledText style={styles.titleText}>Luminous Strategies</StyledText>
        </Animated.View>

        {/* Back */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { opacity: backOpacity, transform: [{ rotateY: backRotate }] },
          ]}
        >
          <StyledText style={styles.text}>
            {cardContent[randomIndex]}
          </StyledText>
        </Animated.View>
      </HapticPressable>
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
    borderRadius: n(25),
    borderWidth: 1,
    backfaceVisibility: "hidden",
    borderColor: "#FFF",
  },
  cardBack: {
    backgroundColor: "#000",
  },
  cardFront: {
    backgroundColor: "#FFF",
  },
  text: {
    textAlign: "center",
    fontSize: n(25),
    padding: n(15),
  },
  titleText: {
    textAlign: "center",
    fontSize: n(35),
    padding: n(15),
    color: "black",
  },
});
