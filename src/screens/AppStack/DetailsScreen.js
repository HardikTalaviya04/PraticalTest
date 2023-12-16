// //import liraries
// import React, { Component, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   Image,
//   FlatList,
//   Alert,
//   Keyboard,
// } from "react-native";
// import { COLORS } from "../../common/Utils/Colors";
// import { FONTS } from "../../common/Utils/fonts";
// import { RFPercentage } from "react-native-responsive-fontsize";
// import { ICON, IMAGE } from "../../common/Utils/image";
// import Header from "../../common/Components/Header";
// import { scaledSized } from "../../common/Utils/constant";
// import { STRING } from "../../localization/en";
// import CommonTextInput from "../../common/Components/CommonTextInput";
// import CategoryHeader from "../../common/Components/CategoryHeader";
// import PopularComponent from "../../common/Components/PopularComponent";
// import { popularData } from "../../assets/json/data";
// import CommonButton from "../../common/Components/CommonButton";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// // create a component
// const AddPost = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const onSearch = (text) => {
//     setSearchText(text);
//   };

//   const Title = ({ title }) => {
//     return <Text style={styles.titleText}>{title}</Text>;
//   };

//   const onPostPressed = async () => {
//     const tempData = await AsyncStorage.getItem("FeedData");
//     const data = JSON.parse(tempData);
//     data.unshift({ body: description, title: title });
//     await AsyncStorage.setItem("FeedData", JSON.stringify(data)).then(() => {
//       setTitle("");
//       setDescription("");
//       Keyboard.dismiss();
//       Alert.alert("Success", "Post added successfully");
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar
//         translucent={false}
//         backgroundColor={COLORS.White}
//         barStyle={"dark-content"}
//       />
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.mainContainer}
//       >
//         {/* <Header onLocationPress={() => {}} onAvatarPress={() => {}} /> */}
//         <View style={styles.textContainer}>
//           <Text style={styles.welcomeText}>{STRING.welcomeText}</Text>
//         </View>
//         <Title title={STRING.title} />
//         <CommonTextInput
//           placeholder={STRING.titlePlaceholder}
//           value={title}
//           onChangeText={setTitle}
//           textInputStyle={styles.TextInputTextStyle}
//           // icon={ICON.Search}
//           keyboardType={"default"}
//         />
//         <Title title={STRING.description} />
//         <CommonTextInput
//           placeholder={STRING.descriptionPlaceholder}
//           value={description}
//           onChangeText={setDescription}
//           textInputStyle={styles.TextInputTextStyle}
//           // icon={ICON.Search}
//           keyboardType={"default"}
//         />
//         <CommonButton
//           label={STRING.post}
//           buttonStyle={[
//             styles.loginButtonContainer,
//             {
//               backgroundColor: !(title && description)
//                 ? COLORS.LightTheme
//                 : COLORS.Theme,
//             },
//           ]}
//           labelStyle={styles.loginButton}
//           disabled={!(title && description)}
//           onPress={onPostPressed}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.White,
//   },
//   text: {
//     fontFamily: FONTS.Bold,
//     color: COLORS.Black,
//   },
//   titleText: {
//     fontFamily: FONTS.SemiBold,
//     color: COLORS.Black,
//     fontSize: scaledSized(14),
//     marginBottom: scaledSized(4),
//     paddingHorizontal: RFPercentage(3),
//   },
//   mainContainer: {},
//   textContainer: {
//     paddingHorizontal: RFPercentage(3),
//     paddingVertical: scaledSized(32),
//   },
//   welcomeText: {
//     color: COLORS.DarkGrey,
//     fontFamily: FONTS.Bold,
//     fontSize: scaledSized(32),
//   },
//   TextInputTextStyle: {
//     fontFamily: FONTS.Medium,
//     fontSize: scaledSized(16),
//     color: COLORS.Black,
//     paddingVertical: scaledSized(13),
//   },
//   popularComponent: {
//     paddingHorizontal: RFPercentage(3),
//     marginBottom: scaledSized(32),
//   },
//   loginButtonContainer: {
//     marginHorizontal: RFPercentage(3),
//   },
//   loginButton: {
//     color: COLORS.White,
//     fontSize: scaledSized(18),
//     fontFamily: FONTS.SemiBold,
//   },
// });

// //make this component available to the app
// export default AddPost;


//import liraries
import React, { Component, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
    Alert,
    Keyboard,
} from "react-native";
import { COLORS } from "../../common/Utils/Colors";
import { FONTS } from "../../common/Utils/fonts";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ICON, IMAGE } from "../../common/Utils/image";
import Header from "../../common/Components/Header";
import { scaledSized } from "../../common/Utils/constant";
import { STRING } from "../../localization/en";
import CommonTextInput from "../../common/Components/CommonTextInput";
import CategoryHeader from "../../common/Components/CategoryHeader";
import PopularComponent from "../../common/Components/PopularComponent";
import { popularData } from "../../assets/json/data";
import CommonButton from "../../common/Components/CommonButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create a component
const DetailsScreen = (perams) => {
    const mainData = perams?.route?.params?.data
    console.log(mainData)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onSearch = (text) => {
        setSearchText(text);
    };

    const Title = ({ title }) => {
        return <Text style={styles.titleText}>{title}</Text>;
    };

    const onPostPressed = async () => {
        const tempData = await AsyncStorage.getItem("FeedData");
        const data = JSON.parse(tempData);
        data.unshift({ body: description, title: title });
        await AsyncStorage.setItem("FeedData", JSON.stringify(data)).then(() => {
            setTitle("");
            setDescription("");
            Keyboard.dismiss();
            Alert.alert("Success", "Post added successfully");
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.White}
                barStyle={"dark-content"}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.mainContainer}
            >
                {/* <Header onLocationPress={() => {}} onAvatarPress={() => {}} /> */}
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>{mainData.original_title}</Text>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${mainData.poster_path}` }} style={{
                        resizeMode: "stretch", height: RFValue(250), width: "100%", marginTop: RFValue(15)
                    }} />
                </View>
                <Text style={styles.TextInputTextStyle}>{`Language : ${mainData.original_language}`}</Text>
                <Text style={styles.TextInputTextStyle}>{`Popularity : ${mainData.popularity}`}</Text>
                <Text style={styles.TextInputTextStyle}>{`Release Date : ${mainData.release_date}`}</Text>
                <Text style={styles.TextInputTextStyle}>{`Rating : ${mainData.vote_average} (${mainData.vote_count})`}</Text>
                <Text style={[styles.TextInputTextStyle,{marginTop:RFValue(25)}]}>{`Overview : ${mainData.overview}`}</Text>
                
            </ScrollView>
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
    titleText: {
        fontFamily: FONTS.SemiBold,
        color: COLORS.Black,
        fontSize: scaledSized(14),
        marginBottom: scaledSized(4),
        paddingHorizontal: RFPercentage(3),
    },
    mainContainer: {},
    textContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: RFPercentage(1),
        paddingVertical: scaledSized(32),
    },
    welcomeText: {
        color: COLORS.DarkGrey,
        fontFamily: FONTS.Bold,
        fontSize: scaledSized(26),
    },
    TextInputTextStyle: {
        fontFamily: FONTS.Medium,
        fontSize: scaledSized(16),
        color: COLORS.Black,
        paddingHorizontal: RFPercentage(3),
    },
    popularComponent: {
        paddingHorizontal: RFPercentage(3),
        marginBottom: scaledSized(32),
    },
    loginButtonContainer: {
        marginHorizontal: RFPercentage(3),
    },
    loginButton: {
        color: COLORS.White,
        fontSize: scaledSized(18),
        fontFamily: FONTS.SemiBold,
    },
});

//make this component available to the app
export default DetailsScreen;
