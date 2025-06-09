import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { View, Dimensions, StyleSheet, LayoutChangeEvent } from "react-native";
import EventCard from "./eventCard";
import { useFonts, Lexend_700Bold } from "@expo-google-fonts/lexend";
// import AppLoading from 'expo-app-loading'; // or use SplashScreen from expo-router if applicable

export default function App() {
  // console.log("s", Dimensions.get("screen"));
  // console.log("w", Dimensions.get("window"));
  const [fontsLoaded] = useFonts({
    Lexend_700Bold,
  });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      TimesNewRoman: require("../assets/fonts/times.ttf"),
    }).then(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const dummyEvents: { title: string; icon: string }[] = [];

  // console.log("min", min);
  dummyEvents.push({ title: "Feier", icon: "🎉" });
  dummyEvents.push({ title: "Football", icon: "🏈" });
  dummyEvents.push({ title: "Nachtisch", icon: "🍨" });
  dummyEvents.push({ title: "Halloween", icon: "🎃" });
  dummyEvents.push({ title: "Werkstatt", icon: "🪚" });

  return (
    <View style={styles.column}>
      {/* <EventCard event = {dummyEvents[0]}/>
      <EventCard event = {dummyEvents[1]}/> */}
      <View style={styles.dummy} />
      <View style={styles.dummy} />
      <View style={styles.dummy} />
      <View style={styles.dummy} />
      {/* <EventCard event = {dummyEvents[2]}/>
      <EventCard event = {dummyEvents[3]}/> */}
      <EventCard event={dummyEvents[4]} />
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    alignSelf: "center",
    flexDirection: "column",
    width: "25%",
    height: "90%",
    borderRadius: 12,
    backgroundColor: "#191F27",
    marginTop: 24,
    padding: 32,
    gap: 8,
    overflow: "hidden",
  },
  dummy: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 4,
    // padding: 6,
    flexWrap: "wrap",
    // borderRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // aspectRatio: 1,
  },
});
