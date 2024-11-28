import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function FormsLayout() {
  return (
    <Stack>
      <Stack.Screen name="formulario" options={{header: Header}}/>
    </Stack>
  );
}
