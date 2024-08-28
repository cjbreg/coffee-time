import { Button } from "react-native";
import React from "react";
import { router } from "expo-router";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import Heading from "@/components/layout/Heading";
import SafeAreaView from "@/components/layout/SafeAreaView";
import CardText from "@/components/text/CardText";
import PressableCard from "@/components/PressableCard";
import IconView from "@/components/IconView";
import { useGetMachineByIdQuery } from "../services/machine";

const HomeView = () => {
  const { data, error, isLoading } = useGetMachineByIdQuery(
    "60ba1ab72e35f2d9c786c610",
  );

  return (
    <SafeAreaView>
      <Heading>
        <SubHeader>Dark Roasted Beans</SubHeader>
        <Header>Tap the machine to start</Header>
      </Heading>

      <PressableCard>
        <IconView />
        <CardText>Coffee</CardText>
      </PressableCard>
      <Button
        title="open entry page"
        onPress={() => router.navigate("/station")}
      />
    </SafeAreaView>
  );
};

export default HomeView;
