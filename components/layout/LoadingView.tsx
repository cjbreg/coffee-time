import { AnimatePresence } from "moti";
import FadeInView from "../animation/FadeInView";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import styled from "@emotion/native";

const LoadingView = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Center = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;
const LoadingScreen = () => {
  return (
    <LoadingView>
      <ActivityIndicator />
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
  return (
    <Center>
      <AnimatePresence exitBeforeEnter>
        {isLoading && (
          <FadeInView key="loader" style={styles.presenceWrapper}>
            <ActivityIndicator />
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
