import { TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { router } from "expo-router";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import Heading from "@/components/layout/Heading";
import SafeAreaView from "@/components/layout/SafeAreaView";
import ScanIllustration from "@/components/illustrations/Scan";
import Link from "@/components/text/Link";
import Toast from "react-native-toast-message";

const HomeView = () => {
  const handleHowDoesThisWork = useCallback(() => {
    Toast.show({
      type: "info",
      text1: "Scan Machine",
      text2: "Hold your phone to the scanner",
    });
  }, []);

  return (
    <SafeAreaView>
      <Heading>
        <SubHeader>Dark Roasted Beans</SubHeader>
        <Header>Tap the machine to start</Header>
      </Heading>

      <TouchableOpacity
        style={{
          alignItems: "center",
          marginVertical: 24,
        }}
        onPress={() =>
          router.navigate("/coffee-machine/60ba1ab72e35f2d9c786c610")
        }
      >
        <ScanIllustration />
      </TouchableOpacity>

      <TouchableOpacity style={{ padding: 16 }} onPress={handleHowDoesThisWork}>
        <Link>How does this work</Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeView;
