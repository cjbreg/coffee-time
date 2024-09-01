import { PresenceLoadingScreen } from "@/components/layout/LoadingView";
import { useGetMachineByIdQuery } from "@/services/machine";
import { selectMachine } from "@/store/coffeeMachine";
import { router, Stack, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

export default function CoffeeMachineLayout() {
  const dispatch = useDispatch();
  const params = useGlobalSearchParams();

  const machineId = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, error, isLoading } = useGetMachineByIdQuery(machineId + 1);

  useEffect(() => {
    if (data && !isLoading && !error) {
      dispatch(selectMachine(data));
    }
    if (error) {
      router.back();
      Toast.show({
        type: "error",
        text1: "Not found",
        text2: "Coffee machine not found",
      });
    }
  }, [isLoading, data, dispatch, error]);

  return (
    <PresenceLoadingScreen isLoading={isLoading || !data}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="select-size" options={{ headerShown: false }} />
        <Stack.Screen name="select-extra" options={{ headerShown: false }} />
        <Stack.Screen name="overview" options={{ headerShown: false }} />
      </Stack>
    </PresenceLoadingScreen>
  );
}
