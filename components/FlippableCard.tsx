import { Animated, StyleSheet, View } from "react-native";
import { n } from "@/utils/scaling";
import { StyledText } from "./StyledText";
import { useRef, useState } from "react";
import { HapticPressable } from "./HapticPressable";
import { router } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";

export function FlippableCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const obliqueStrategies = [
    "(Organic) machinery",
    "A line has two sides",
    "A very small object\n\nIts center",
    "Abandon desire",
    "Abandon normal instructions",
    "Abandon normal instruments",
    "Accept advice",
    "Accretion",
    "Adding on",
    "Allow an easement (an easement is the abandonment of a stricture)",
    "Always first steps",
    "Always give yourself credit for having more than personality (given by Arto Lindsay)",
    "Always the first steps",
    "Are there sections?  Consider transitions",
    "Ask people to work against their better judgement",
    "Ask your body",
    "Assemble some of the elements in a group and treat the group",
    "Balance the consistency principle with the inconsistency principle",
    "Be dirty",
    "Be extravagant",
    "Be less critical",
    "Breathe more deeply",
    "Bridges -build -burn",
    "Cascades",
    "Change ambiguities to specifics",
    "Change instrument roles",
    "Change nothing and continue with immaculate consistency",
    "Change specifics to ambiguities",
    "Children -speaking -singing",
    "Cluster analysis",
    "Consider different fading systems",
    "Consider transitions",
    "Consult other sources -promising -unpromising",
    "Convert a melodic element into a rhythmic element",
    "Courage!",
    "Cut a vital connection",
    "Decorate, decorate",
    "Define an area as 'safe' and use it as an anchor",
    "Destroy nothing; Destroy the most important thing",
    "Discard an axiom",
    "Disciplined self-indulgence",
    "Disconnect from desire",
    "Discover the recipes you are using and abandon them",
    "Discover your formulas and abandon them",
    "Display your talent",
    "Distort time",
    "Do nothing for as long as possible",
    "Do something boring",
    "Do something sudden, destructive and unpredictable",
    "Do the last thing first",
    "Do the washing up",
    "Do the words need changing?",
    "Do we need holes?",
    "Don't avoid what is easy",
    "Don't be frightened of cliches",
    "Don't break the silence",
    "Don't stress one thing more than another",
    "Don't be afraid of things because they're easy to do",
    "Don't be frightened to display your talents",
    "Emphasize differences",
    "Emphasize repetitions",
    "Emphasize the flaws",
    "Faced with a choice, do both (given by Dieter Rot)",
    "Feed the recording back out of the medium",
    "Fill every beat with something",
    "Find a safe part and use it as an anchor",
    "Get your neck massaged",
    "Ghost echoes",
    "Give the game away",
    "Give the name away",
    "Give way to your worst impulse",
    "Go outside. Shut the door.",
    "Go slowly all the way round the outside",
    "Go to an extreme, come part way back",
    "Honor thy error as a hidden intention",
    "Honor thy mistake as a hidden intention",
    "How would someone else do it?",
    "How would you have done it?",
    "Humanize something free of error",
    "Idiot glee (?)",
    "Imagine the piece as a set of disconnected events",
    "In total darkness, or in a very large room, very quietly",
    "Infinitesimal gradations",
    "Intentions -nobility of -humility of -credibility of",
    "Into the impossible",
    "Is it finished?",
    "Is something missing?",
    "Is the information correct?",
    "Is the style right?",
    "It is quite possible (after all)",
    "It is simply a matter of work",
    "Just carry on",
    "Left channel, right channel, center channel",
    "Listen to the quiet voice",
    "Look at the order in which you do things",
    "Look closely at the most embarrassing details & amplify them",
    "Lost in useless territory",
    "Lowest common denominator",
    "Magnify the most difficult details",
    "Make a blank valuable by putting it in an exquisite frame",
    "Make a sudden, destructive unpredictable action; incorporate",
    "Make an exhaustive list of everything you might do & do the last thing on the list",
    "Make it more sensual",
    "Make what's perfect more human",
    "Mechanicalize something idiosyncratic",
    "Move towards the unimportant",
    "Mute and continue",
    "Not building a wall; making a brick",
    "Once the search has begun, something will be found",
    "Only a part, not the whole",
    "Only one element of each kind",
    "Openly resist change",
    "Pae White's non-blank graphic metacard",
    "Put in earplugs",
    "Question the heroic approach",
    "Reevaluation (a warm feeling)",
    "Remember those quiet evenings",
    "Remove a restriction",
    "Remove ambiguities and convert to specifics",
    "Remove specifics and convert to ambiguities",
    "Repetition is a form of change",
    "Retrace your steps",
    "Reverse",
    "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
    "Simple subtraction",
    "Slow preparation, fast execution",
    "Spectrum analysis",
    "State the problem in words as clearly as possible",
    "Take a break",
    "Take away the elements in order of apparent non-importance",
    "Take away the important parts",
    "Tape your mouth (given by Ritva Saarikko)",
    "The inconsistency principle",
    "The most important thing is the thing most easily forgotten",
    "The tape is now the music",
    "Think - inside the work - outside the work",
    "Think of the radio",
    "Tidy up",
    "Towards the insignificant",
    "Trust in the you of now",
    "Try faking it (from Stewart Brand)",
    "Turn it upside down",
    "Twist the spine",
    "Use 'unqualified' people",
    "Use an old idea",
    "Use an unacceptable color",
    "Use cliches",
    "Use fewer notes",
    "Use filters",
    "Use something nearby as a model",
    "Use your own ideas",
    "Voice your suspicions",
    "Water",
    "What are the sections sections of? Imagine a caterpillar moving",
    "What are you really thinking about just now?",
    "What context would look right?",
    "What is the reality of the situation?",
    "What is the simplest solution?",
    "What mistakes did you make last time?",
    "What to increase? What to reduce? What to maintain?",
    "What would your closest friend do?",
    "What wouldn't you do?",
    "When is it for?",
    "Where is the edge?",
    "Which parts can be grouped?",
    "Work at a different speed",
    "Would anyone want it?",
    "You are an engineer",
    "You can only make one dot at a time",
    "You don't have to be ashamed of using your own ideas",
    "[blank white card]",
  ];

  const [randomIndex, setRandomIndex] = useState(
    Math.round(Math.random() * (obliqueStrategies.length - 1)),
  );

  function refreshCard() {
    //find old var
    const previousIndex = randomIndex;

    //create new var
    let newIndex = Math.round(Math.random() * (obliqueStrategies.length - 1));

    //check for non-identical value
    if (obliqueStrategies.length > 1) {
      while (newIndex == previousIndex) {
        newIndex = Math.random() * (obliqueStrategies.length - 1);
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
    router.navigate("./add-new");
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
          <StyledText style={styles.text}>
            {obliqueStrategies[randomIndex]}
          </StyledText>
        </Animated.View>

        {/* Back */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { opacity: backOpacity, transform: [{ rotateY: backRotate }] },
          ]}
        >
          <StyledText style={styles.titleText}>Luminous Strategies</StyledText>
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
  cardFront: {
    backgroundColor: "#000",
  },
  cardBack: {
    backgroundColor: "#FFF",
    position: "absolute",
    top: 0,
    left: 0,
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
