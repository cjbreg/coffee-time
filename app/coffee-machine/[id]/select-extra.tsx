import IconView from "@/components/IconView";
import { CoffeeExtraList } from "@/components/ItemsList";
import Heading from "@/components/layout/Heading";
import SafeAreaView from "@/components/layout/SafeAreaView";
import PressableCard from "@/components/PressableCard";
import CardText from "@/components/text/CardText";
import Header from "@/components/text/Header";
import SubHeader from "@/components/text/SubHeader";
import { CoffeeExtra } from "@/services/types";
import { RootState } from "@/store";
import { selectCoffeeExtra } from "@/store/actions/coffeeActions";
import { router } from "expo-router";
import { useCallback, useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SubHeading from "@/components/layout/SubHeading";

const SelectExtra = () => {
  const dispatch = useDispatch();
  const machine = useSelector(
    (state: RootState) => state.coffeeMachine.selectedMachine,
  );
  const coffeeType = useSelector(
    (state: RootState) => state.coffee.selectedType,
  );

  const availableExtras = useMemo(
    () =>
      machine?.extras.filter((extra) => coffeeType?.extras.includes(extra._id)),
    [machine, coffeeType],
  );

  const onGoBack = useCallback(() => {
    router.back();
  }, []);

  const onSubmit = useCallback(
    (item: CoffeeExtra) => {
      dispatch(selectCoffeeExtra(item));
      router.navigate("/coffee-machine/[id]/overview");
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({ item }: { item: CoffeeExtra }) => (
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
        <Header>Select your extra's</Header>
      </Heading>
      <View>
        <CoffeeExtraList data={availableExtras} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default SelectExtra;
