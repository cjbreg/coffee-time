import React from "react";
import { router } from "expo-router";
import SafeAreaView from "@/components/layout/SafeAreaView";
import Heading from "@/components/layout/Heading";
import SubHeading from "@/components/layout/SubHeading";
import SubHeader from "@/components/text/SubHeader";
import Header from "@/components/text/Header";
import PressableCard from "@/components/PressableCard";
import CardText from "@/components/text/CardText";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Card from "@/components/layout/Card";
import styled from "@emotion/native";
import IconView from "@/components/IconView";

const OrderWrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  padding-vertical: 4px;
`;

const Item = styled.View`
  display: flex;
  gap: 20px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.textSecondary};
`;

/// WIP ///

const OverviewScreen = () => {
  const selectedCoffee = useSelector((state: RootState) => state.coffee);
  const onSubmit = React.useCallback(() => {
    router.replace("/");
  }, []);
  return (
    <SafeAreaView>
      <Heading>
        <SubHeading>
          <SubHeader>Brew with Lex</SubHeader>
        </SubHeading>
        <Header>Overview</Header>
      </Heading>

      <View style={{ flex: 1, padding: 16 }}>
        <Card>
          <OrderWrapper>
            <Item>
              <IconView />
              <CardText>{selectedCoffee.selectedType?.name}</CardText>
            </Item>
            <Divider />
            <Item>
              <IconView />
              <CardText>{selectedCoffee.selectedSize?.name}</CardText>
            </Item>
            <Divider />
            <Item>
              <IconView />
              <CardText>
                {selectedCoffee.selectedExtra?.subselections[0].name}
              </CardText>
            </Item>
          </OrderWrapper>
        </Card>
      </View>

      <View style={{ padding: 16 }}>
        <PressableCard onPress={onSubmit}>
          <CardText>Brew you coffee</CardText>
        </PressableCard>
      </View>
    </SafeAreaView>
  );
};

export default OverviewScreen;
