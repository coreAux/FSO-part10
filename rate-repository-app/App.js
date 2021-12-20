import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from "react-router-native";

import Main from "./src/components/Main";

export default function App() {
  // console.log('\x1b[36m%s\x1b[0m', "Running :)");
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
