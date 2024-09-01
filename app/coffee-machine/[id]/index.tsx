import IconView from "@/components/IconView";
import { CoffeeTypeList } from "@/components/ItemsList";
import Heading from "@/components/layout/Heading";
import SafeAreaView from "@/components/layout/SafeAreaView";
import PressableCard from "@/components/PressableCard";
import CardText from "@/components/text/CardText";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import { CoffeeType } from "@/services/types";
import { RootState } from "@/store";
import { selectCoffeeType } from "@/store/actions/coffeeActions";
import { Href, router, useGlobalSearchParams } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SelectType() {
  const dispatch = useDispatch();
  const params = useGlobalSearchParams();
  const machineId = Array.isArray(params.id) ? params.id[0] : params.id;

  const machine = useSelector(
    (state: RootState) => state.coffeeMachine.selectedMachine,
  );

  const onSubmit = useCallback(
    (item: CoffeeType) => {
      dispatch(selectCoffeeType(item));
      router.navigate(
        `/coffee-machine/${machineId}/select-size` as Href<string>,
      );
    },
    [dispatch, machineId],
  );

  const renderItem = useCallback(
    ({ item }: { item: CoffeeType }) => {
      return (
        <View style={{ paddingVertical: 4 }}>
          <PressableCard onPress={() => onSubmit(item)}>
            <IconView />
            <CardText>{item.name}</CardText>
          </PressableCard>
        </View>
      );
    },
    [onSubmit],
  );

  return (
    <SafeAreaView>
      <Heading>
        <SubHeader>Brew with Lex</SubHeader>
        <Header>Select your style</Header>
      </Heading>
      <View>
        <CoffeeTypeList data={machine?.types} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}
