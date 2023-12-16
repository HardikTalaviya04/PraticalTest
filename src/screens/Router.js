//import liraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./AuthStack/Splash";
import Home from "./AppStack/Feed";
import { SCREEN } from "../common/Utils/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./AppStack/Feed";
import AddPost from "./AppStack/AddPost";
import { ICON } from "../common/Utils/image";
import { Image } from "react-native";
import { scaledSized } from "../common/Utils/constant";
import { COLORS } from "../common/Utils/Colors";
import DetailsScreen from "./AppStack/DetailsScreen";

// create a component
const Router = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Dashboard = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={SCREEN.Feed}
          component={Feed}
          options={{
            tabBarLabel: "Movies",
            tabBarIcon: ({ focused }) => (
              <Image
                source={ICON.Feed}
                resizeMode="contain"
                style={{
                  width: scaledSized(24),
                  height: scaledSized(24),
                  tintColor: focused ? COLORS.Theme : COLORS.LightTheme,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={SCREEN.AddPost}
          component={AddPost}
          options={{
            tabBarLabel: "Add Movies",
            tabBarIcon: ({ focused }) => (
              <Image
                source={ICON.Plus}
                resizeMode="contain"
                style={{
                  width: scaledSized(24),
                  height: scaledSized(24),
                  tintColor: focused ? COLORS.Theme : COLORS.LightTheme,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.Splash}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREEN.Splash} component={Splash} />
        <Stack.Screen name={SCREEN.Dashboard} component={Dashboard} />
        <Stack.Screen name={SCREEN.DetailsScreen} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Router;
