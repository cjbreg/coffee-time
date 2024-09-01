import { CoffeeExtra, CoffeeSize, CoffeeType } from "@/services/types";
import styled from "@emotion/native";
import { FlatList } from "react-native";

const CoffeeTypeList = styled(FlatList<CoffeeType>)`
  padding: 16px;
`;

const CoffeeSizeList = styled(FlatList<CoffeeSize>)`
  padding: 16px;
`;

const CoffeeExtraList = styled(FlatList<CoffeeExtra>)`
  padding: 16px;
`;

export { CoffeeTypeList, CoffeeExtraList, CoffeeSizeList };
