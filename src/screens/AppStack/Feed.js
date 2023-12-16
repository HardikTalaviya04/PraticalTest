//import liraries
import React, { Component, useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../common/Utils/Colors";
import { FONTS } from "../../common/Utils/fonts";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ICON, IMAGE } from "../../common/Utils/image";
import Header from "../../common/Components/Header";
import { scaledSized } from "../../common/Utils/constant";
import { STRING } from "../../localization/en";
import CommonTextInput from "../../common/Components/CommonTextInput";
import CategoryHeader from "../../common/Components/CategoryHeader";
import PopularComponent from "../../common/Components/PopularComponent";
import { popularData } from "../../assets/json/data";
import Loader from "../../common/Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create a component
const Feed = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [loader, setLoader] = useState(true);
  const [checkCall, setcheckCall] = useState(false);
  const [endLoading, setendLoading] = useState(false);
  const [feedData, setfeedData] = useState([]);
  const [pagenumber, setpagenumber] = useState(1);
  const [filterData, setFilterData] = useState([]);
  const FeedData = useSelector((state) => state?.Login);

  useFocusEffect(
    useCallback(() => {
      initialFunction(pagenumber);
    }, [])
  );

  const initialFunction = async (page) => {
    const data = await AsyncStorage.getItem("FeedData");
    // console.log("start test:",data)
    // if (data?.results) {
    //   setfeedData(JSON.parse(data));
    //   setLoader(false);
    // } else {
      setcheckCall(true);
      dispatch(LoginAction(page));
    // }
  };

  useEffect(() => {
    if (checkCall) {
      console.log("FeedData1231231:",FeedData?.data[0])
      if (FeedData?.LoginSuccess) {
        if (FeedData?.data[1] == 200) {
          if(endLoading){
            const myMoviesData = feedData
            let newData = FeedData?.data[0].results
            const merged = [...myMoviesData, ...newData]
            setendLoading(false)
            setfeedData(merged)
          }else{
            setLoader(false);
            AsyncStorage.setItem("FeedData", JSON.stringify(FeedData?.data[0]));
            setfeedData(FeedData?.data[0].results);
          }
        } else {
          setLoader(false);
          setfeedData([]);
        }
      }
    }
  }, [FeedData]);

  const onSearch = (text) => {
    console.log("feeddata:",feedData)
    setSearchText(text);
    if(feedData?.results?.length != 0){
      const filterdData = feedData?.filter((item) => {
        return ( 
          item?.original_title?.toLowerCase()?.includes(text?.toLowerCase())
          );
        });
        setFilterData(filterdData);
      }
  };

  const onEndRiched = () => {
    setpagenumber(pagenumber+1)
    setendLoading(true)
    initialFunction(pagenumber+1)
  }

  const renderPopularItem = ({ item, index }) => {
    return <PopularComponent title={item.original_title} location={item.overview} distance={item.release_date} data={item}/>;
  };

  const ItemSeparatorComponent = () => {
    return <View style={{ height: scaledSized(16) }} />;
  };
  const footerloder = () => {
    return  <ActivityIndicator size="large" color={COLORS.TextBlue} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.White}
        barStyle={"dark-content"}
      />
      <CommonTextInput
        placeholder={STRING.searchPlaceholder}
        value={searchText}
        onChangeText={ onSearch}
        textInputStyle={styles.TextInputTextStyle}
        icon={ICON.Search}
        keyboardType={"default"}
      />
      {loader ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={COLORS.TextBlue} />
        </View>
      ) : (
        <FlatList
          key={(_, index) => index.toString()}
          data={searchText ? filterData : feedData}
          renderItem={renderPopularItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popularComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Medium,
                  fontSize: scaledSized(16),
                  color: COLORS.DarkGrey,
                }}
              >
                {STRING.noData}
              </Text>
            </View>
          )}
          onEndReached={onEndRiched}
          ListFooterComponent={footerloder}
        />
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  text: {
    fontFamily: FONTS.Bold,
    color: COLORS.Black,
  },
  mainContainer: {},
  textContainer: {
    paddingHorizontal: RFPercentage(3),
    paddingVertical: scaledSized(32),
  },
  welcomeText: {
    color: COLORS.DarkGrey,
    fontFamily: FONTS.Bold,
    fontSize: scaledSized(32),
  },
  TextInputTextStyle: {
    fontFamily: FONTS.Medium,
    fontSize: scaledSized(16),
    color: COLORS.Black,
    paddingVertical: scaledSized(13),
  },
  popularComponent: {
    paddingHorizontal: RFPercentage(3),
    marginBottom: scaledSized(32),
  },
});

//make this component available to the app
export default Feed;
