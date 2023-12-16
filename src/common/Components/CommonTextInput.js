import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { View, StyleSheet, TextInput, Image, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../Utils/Colors";
import { scaledSized } from "../Utils/constant";
import { FONTS } from "../Utils/fonts";

const { height } = Dimensions.get("window");

const CommonTextInput = forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      textInputStyle,
      icon,
      isPassword = false,
      onSubmitEditing,
      returnKeyType,
      keyboardType,
      autoCapitalize,
    },
    ref
  ) => {
    const textInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={styles.textInputContainer}>
        <TextInput
          ref={textInputRef}
          style={[styles.textInput, textInputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.PlaceholderGrey}
          secureTextEntry={isPassword}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {icon && (
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingRight: scaledSized(8),
    paddingVertical: scaledSized(17),
  },
  textInputContainer: {
    borderRadius: scaledSized(12),
    paddingHorizontal: scaledSized(16),
    backgroundColor: COLORS.Grey,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: RFPercentage(3),
    marginBottom: scaledSized(32),
  },
  textInputHeading: {
    color: COLORS.Black,
    fontFamily: FONTS.Medium,
    fontSize: scaledSized(16),
    marginBottom: scaledSized(4),
  },
  iconStyle: {
    height: scaledSized(16),
    width: scaledSized(16),
  },
});

export default CommonTextInput;
