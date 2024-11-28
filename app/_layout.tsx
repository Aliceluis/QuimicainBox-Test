import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(Inicial)/index" options={{header: Header}} />
      <Stack.Screen name="(ZAtomistica)/index" options={{header: Header}} />
      <Stack.Screen name="(login)/index" options={{headerShown: false}} />
      <Stack.Screen name='(Forms)' options={{headerShown: false}} />
      <Stack.Screen name='(Resultado)/index' options={{header: Header}} />
      <Stack.Screen name='(Pagprof)/index' options={{headerShown: false}} />
    </Stack>
  );
}
