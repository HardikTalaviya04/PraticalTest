//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ICON, IMAGE } from "../Utils/image";
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS } from "../Utils/Colors";
import { scaledSized } from "../Utils/constant";
import { STRING } from "../../localization/en";
import { FONTS } from "../Utils/fonts";

// create a component
const Header = ({ onLocationPress, onAvatarPress }) => {
  return (
    <View style={styles.headerComponent}>
      <TouchableOpacity
        activeOpacity={0.7}
        hitSlop={10}
        style={styles.headerLeftComponent}
        onPress={onLocationPress}
      >
        <Image
          style={styles.headerLocationIcon}
          resizeMode="contain"
          source={ICON.Location}
        />
        <Text style={styles.text}>{STRING.location} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onAvatarPress}
        hitSlop={10}
      >
        <Image source={IMAGE.Avatar} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RFPercentage(3),
  },
  headerLeftComponent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.Grey,
    paddingVertical: scaledSized(16),
    paddingHorizontal: scaledSized(12),
    borderRadius: scaledSized(16),
    marginRight: scaledSized(8),
    alignSelf: "flex-start",
  },
  headerLocationIcon: {
    width: scaledSized(24),
    height: scaledSized(24),
    marginRight: scaledSized(8),
  },
  avatar: {
    width: scaledSized(50),
    height: scaledSized(50),
  },
  text: {
    fontFamily: FONTS.SemiBold,
    fontSize: scaledSized(16),
    color: COLORS.TextGrey,
  },
});

//make this component available to the app
export default Header;
