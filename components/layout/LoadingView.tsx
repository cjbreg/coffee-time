import { AnimatePresence } from "moti";
import FadeInView from "../animation/FadeInView";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import styled from "@emotion/native";
import { useTheme } from "@emotion/react";

const LoadingView = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  justify-content: center;
`;

const Center = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;
const LoadingScreen = () => {
  const theme = useTheme();
  return (
    <LoadingView>
      <ActivityIndicator color={theme.colors.textPrimary} />
    </LoadingView>
  );
};

export const PresenceLoadingScreen = ({
  isLoading,
  children,
}: {
  isLoading?: boolean;
  children: JSX.Element;
}) => {
  const theme = useTheme();

  return (
    <Center>
      <AnimatePresence exitBeforeEnter>
        {isLoading && (
          <FadeInView key="loader" style={styles.presenceWrapper}>
            <ActivityIndicator color={theme.colors.textPrimary} />
          </FadeInView>
        )}

        {!isLoading && (
          <FadeInView key="children" style={styles.presenceWrapper}>
            {children}
          </FadeInView>
        )}
      </AnimatePresence>
    </Center>
  );
};

const styles = StyleSheet.create({
  presenceWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default LoadingScreen;
