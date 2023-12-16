//import liraries
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../Utils/Colors";
import { FONTS } from "../Utils/fonts";
import { scaledSized } from "../Utils/constant";

// create a component
const CategoryHeader = ({ onSeeAll, HeaderText }) => {
  return (
    <View style={styles.container}>
      {HeaderText && <Text style={styles.headerTitle}>{HeaderText}</Text>}
      <TouchableOpacity onPress={onSeeAll} activeOpacity={0.7} hitSlop={10}>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: RFPercentage(3),
    alignItems: "center",
    flex: 1,
  },
  headerTitle: {
    fontFamily: FONTS.Bold,
    fontSize: scaledSized(24),
    color: COLORS.DarkGrey,
  },
  seeAllText: {
    fontFamily: FONTS.SemiBold,
    fontSize: scaledSized(16),
    color: COLORS.Theme,
  },
});

//make this component available to the app
export default CategoryHeader;
