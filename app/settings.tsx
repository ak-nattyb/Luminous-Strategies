import { nativeApplicationVersion } from "expo-application";
import ContentContainer from "@/components/ContentContainer";

export default function SettingsScreen() {
  const version = nativeApplicationVersion;

  return (
    <ContentContainer
      contentGap={20}
      headerTitle={`Settings (v${version})`}
    ></ContentContainer>
  );
}
