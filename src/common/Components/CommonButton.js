//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaledSized } from "../Utils/constant";

// create a component
const CommonButton = ({
  label,
  buttonStyle,
  labelStyle,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.loginButtonContainer, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.loginButton, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  loginButtonContainer: {
    backgroundColor: COLORS.Theme,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFPercentage(2),
    paddingHorizontal: RFPercentage(6),
    borderRadius: scaledSized(16),
  },
  loginButton: {
    color: COLORS.White,
    fontFamily: FONTS.SemiBold,
    fontSize: scaledSized(14),
  },
});

//make this component available to the app
export default CommonButton;
