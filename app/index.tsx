import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new app</Text>
            <Link href="/login" style={styles.button}>Login</Link>
            <Link href="/signup" style={styles.button}>Sign Up</Link>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2e86de'
  },
   button: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginBottom: 16,
    marginTop: 16
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

})