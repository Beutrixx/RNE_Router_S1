import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#2e86de'
      },
    }}>
      <Stack.Screen name="index"  options={{
      headerTitle: " ",
      headerTintColor: 'white',
      }}/>
      <Stack.Screen name="login" options={{
        headerTitle: " ",
        
        }} />
      <Stack.Screen name="signup" options={{
        headerTitle: " "}} />
    </Stack>

  );
}
