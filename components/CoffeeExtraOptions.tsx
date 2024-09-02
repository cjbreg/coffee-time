import { View } from "react-native";
import React, { PropsWithChildren, useState } from "react";
import { AnimatePresence, MotiView } from "moti";
import { MotiPressable } from "moti/interactions";
import styled from "@emotion/native";
import { CoffeeExtra } from "@/services/types";
import CardText from "./text/CardText";
import PressableSubCard from "./PressableSubCard";

const Wrapper = styled.View`
  display: flex;
  background-color: ${(props) => props.theme.colors.cardBackgroundColor};
  padding: 16px;
  border-radius: 12px;
`;

const ChildrenCard = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubOptionCard = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.theme.colors.subCardBackgroundColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
`;

interface ICoffeeExtraOption extends PropsWithChildren {
  item: CoffeeExtra;
  onSelectItem: (item: CoffeeExtra) => void;
}

const CoffeeExtraOptions = ({ onSelectItem, item }: ICoffeeExtraOption) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const renderSubSelections = () => {
    return item.subselections.map((subSelection, index) => {
      const handleOnPress = () => {
        console.log(subSelection);
        onSelectItem({ ...item, subselections: [subSelection] });
      };

      return (
        <PressableSubCard
          key={index}
          style={{ padding: 0 }}
          onPress={handleOnPress}
        >
          <SubOptionCard>
            <CardText>{subSelection.name}</CardText>

            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 9999,
              }}
            />
          </SubOptionCard>
        </PressableSubCard>
      );
    });
  };

  return (
    <MotiPressable onPress={() => setIsCollapsed(!isCollapsed)}>
      <Wrapper>
        <ChildrenCard>
          <CardText>{item.name}</CardText>
        </ChildrenCard>
        <AnimatePresence>
          {!isCollapsed && (
            <MotiView
              from={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              style={{ gap: 6, paddingTop: 12 }}
            >
              {renderSubSelections()}
            </MotiView>
          )}
        </AnimatePresence>
      </Wrapper>
    </MotiPressable>
  );
};

export default CoffeeExtraOptions;
