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
import { router } from "expo-router";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SelectType() {
  const dispatch = useDispatch();
  const machine = useSelector(
    (state: RootState) => state.coffeeMachine.selectedMachine,
  );

  const onSubmit = (item: CoffeeType) => {
    dispatch(selectCoffeeType(item));
    router.navigate("/coffee-machine/[id]/select-size");
  };

  const renderItem = ({ item }: { item: CoffeeType }) => {
    const handlePress = () => {
      onSubmit(item);
    };

    return (
      <View style={{ paddingVertical: 4 }}>
        <PressableCard onPress={handlePress}>
          <IconView />
          <CardText>{item.name}</CardText>
        </PressableCard>
      </View>
    );
  };

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
