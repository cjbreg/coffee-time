import { Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import Heading from "@/components/layout/Heading";
import SafeAreaView from "@/components/layout/SafeAreaView";

const HomeView = () => {
  return (
    <SafeAreaView>
      <Heading>
        <SubHeader>Dark Roasted Beans</SubHeader>
        <Header>Tap the machine to start</Header>
      </Heading>

      <Button
        title="open entry page"
        onPress={() =>
          router.navigate("/coffee-machine/60ba1ab72e35f2d9c786c610")
        }
      />
    </SafeAreaView>
  );
};

export default HomeView;
