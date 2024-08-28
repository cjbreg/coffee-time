import { Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { router } from "expo-router";

const HomeView = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>index</Text>
      <Text>index</Text>
      <Button
        title="open entry page"
        onPress={() => router.navigate("/entry")}
      />
    </SafeAreaView>
  );
};

export default HomeView;
