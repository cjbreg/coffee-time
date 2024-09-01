import IconView from "@/components/IconView";
import { CoffeeSizeList } from "@/components/ItemsList";
import Heading from "@/components/layout/Heading";
import SafeAreaView from "@/components/layout/SafeAreaView";
import PressableCard from "@/components/PressableCard";
import CardText from "@/components/text/CardText";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import { CoffeeSize } from "@/services/types";
import { RootState } from "@/store";
import { selectCoffeeSize } from "@/store/actions/coffeeActions";
import { router } from "expo-router";
import { useCallback, useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SubHeading from "@/components/layout/SubHeading";

const SelectSize = () => {
  const dispatch = useDispatch();
  const machine = useSelector(
    (state: RootState) => state.coffeeMachine.selectedMachine,
  );
  const coffeeType = useSelector(
    (state: RootState) => state.coffee.selectedType,
  );

  const availableSizes = useMemo(
    () => machine?.sizes.filter((size) => coffeeType?.sizes.includes(size._id)),
    [machine, coffeeType],
  );

  const onGoBack = useCallback(() => {
    router.back();
  }, []);

  const onSubmit = useCallback(
    (item: CoffeeSize) => {
      dispatch(selectCoffeeSize(item));
      router.navigate("/coffee-machine/[id]/select-extra");
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({ item }: { item: CoffeeSize }) => (
      <View style={{ paddingVertical: 4 }}>
        <PressableCard onPress={() => onSubmit(item)}>
          <IconView />
          <CardText>{item.name}</CardText>
        </PressableCard>
      </View>
    ),
    [onSubmit],
  );

  return (
    <SafeAreaView>
      <Heading>
        <TouchableOpacity onPress={onGoBack}>
          <SubHeading>
            <SubHeader>Brew with Lex</SubHeader>
          </SubHeading>
        </TouchableOpacity>
        <Header>Select your size</Header>
      </Heading>
      <View>
        <CoffeeSizeList data={availableSizes} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default SelectSize;
