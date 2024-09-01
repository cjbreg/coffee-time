import { PresenceLoadingScreen } from "@/components/layout/LoadingView";
import { useGetMachineByIdQuery } from "@/services/machine";
import { selectMachine } from "@/store/coffeeMachine";
import { Stack, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function CoffeeMachineLayout() {
  const params = useGlobalSearchParams();
  const dispatch = useDispatch();

  const machineId = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, error, isLoading } = useGetMachineByIdQuery(machineId);

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(selectMachine(data));
    }
  }, [isLoading, data, dispatch]);

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
