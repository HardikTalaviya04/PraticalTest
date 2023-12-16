//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";
import { scaledSized } from "../Utils/constant";
import { ICON, IMAGE } from "../Utils/image";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import CommonButton from "./CommonButton";
import { STRING } from "../../localization/en";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../Utils/Screen";

// create a component
const PopularComponent = ({
  title,
  location,
  distance,
  data,
  onRoutePress,
  isLiked,
}) => {
  const navigation = useNavigation()
  return (
    // <ImageBackground
    //   style={styles.container}
    //   source={IMAGE.Splash}
    //   resizeMode="cover"
    //   borderRadius={scaledSized(16)}
    // >
    <TouchableOpacity style={styles.textViewContainer} onPress={()=>navigation.navigate(SCREEN.DetailsScreen,{data:data})}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleText}>{`Release Date: ${distance}`}</Text>
      <View style={styles.locationContainer}>
        {/* <Image
          source={ICON.Location}
          style={styles.locationIcon}
          resizeMode="contain"
        /> */}
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </TouchableOpacity>
    // <Image
    //   source={ICON.Heart}
    //   style={[
    //     styles.heartIcon,
    //     { tintColor: isLiked ? COLORS.Red : COLORS.White },
    //   ]}
    //   resizeMode="contain"
    // />
    // </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: scaledSized(240),
    width: scaledSized(180),
    overflow: "hidden",
    borderRadius: scaledSized(16),
    justifyContent: "flex-end",
  },
  textViewContainer: {
    backgroundColor: "rgba(225,225,225,0.8)",
    borderRadius: scaledSized(16),
    padding: scaledSized(12),
  },
  titleText: {
    color: COLORS.Black,
    fontSize: scaledSized(12),
    fontFamily: FONTS.Bold,
  },
  locationIcon: {
    height: scaledSized(16),
    width: scaledSized(16),
    tintColor: COLORS.IconGrey,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scaledSized(4),
  },
  locationText: {
    color: COLORS.PlaceholderGrey,
    fontSize: scaledSized(12),
    fontFamily: FONTS.SemiBold,
    // paddingLeft: scaledSized(6),
  },
  KMContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingTop: scaledSized(11),
    justifyContent: "space-between",
  },
  KMText: {
    color: COLORS.PlaceholderGrey,
    fontSize: scaledSized(14),
    fontFamily: FONTS.SemiBold,
  },
  loginButtonContainer: {
    paddingVertical: scaledSized(6),
    paddingHorizontal: scaledSized(12),
    borderRadius: scaledSized(8),
  },
  loginButton: {
    color: COLORS.White,
    fontSize: scaledSized(12),
    fontFamily: FONTS.Bold,
  },
  heartIcon: {
    position: "absolute",
    right: scaledSized(12),
    top: scaledSized(12),
    height: scaledSized(16),
    width: scaledSized(16),
  },
});

//make this component available to the app
export default PopularComponent;
