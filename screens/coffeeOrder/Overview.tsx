import { Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import SafeAreaView from "@/components/layout/SafeAreaView";

const OverviewScreen = () => {
  const onSubmit = () => {
    router.replace("/");
  };
  return (
    <SafeAreaView>
      <Text>overview</Text>
      <Button onPress={onSubmit} title="test" />
    </SafeAreaView>
  );
};

export default OverviewScreen;
