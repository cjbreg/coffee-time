import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import React from "react";
import type { PropsWithChildren } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useTheme } from "@emotion/react";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  border-with: 1px;
`;

const SubHeading = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  const onGoBack = () => {
    router.back();
  };

  return (
    <Container>
      {router.canGoBack() && (
        <TouchableOpacity onPress={onGoBack}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={theme.colors.textPrimary}
          />
        </TouchableOpacity>
      )}
      {children}
    </Container>
  );
};

export default SubHeading;
