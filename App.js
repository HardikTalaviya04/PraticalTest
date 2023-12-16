//import liraries
import React, { createContext, useState } from "react";
import { View, StyleSheet, LogBox, StatusBar } from "react-native";
import Router from "./src/screens/Router";
import Network from "./src/common/Components/Network";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import reducers from "./src/redux/reducers";
import rootSaga from "./src/redux/saga";
import { Provider } from "react-redux";

// create a component

const App = () => {
  LogBox.ignoreAllLogs();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <Provider store={store}>
        <Network />
        <Router />
      </Provider>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
