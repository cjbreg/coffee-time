import { Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import Heading from "@/components/layout/Heading";
import View from "@/components/layout/View";

const HomeView = () => {
  return (
    <View>
      <Heading>
        <SubHeader>Dark Roasted Beans</SubHeader>
        <Header>Tap the machine to start</Header>
      </Heading>
      <Button
        title="open entry page"
        onPress={() => router.navigate("/station")}
      />
    </View>
  );
};

export default HomeView;
