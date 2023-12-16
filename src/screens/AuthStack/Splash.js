//import liraries
import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { COLORS } from "../../common/Utils/Colors";
import { FONTS } from "../../common/Utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { IMAGE } from "../../common/Utils/image";
import { SCREEN } from "../../common/Utils/Screen";

// create a component
const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: SCREEN.Dashboard }],
      });
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={IMAGE.Splash}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar translucent />
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.White,
  },
  bgImage: {
    flex: 1,
  },
});

//make this component available to the app
export default Splash;
