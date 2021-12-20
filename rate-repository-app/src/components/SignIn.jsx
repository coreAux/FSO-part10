import React from "react";
import { View } from "react-native";

import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

const SignIn = () => (
  <View>
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      onSubmit={() => console.log("Submitted!")}
    >
      {({ onSubmit }) => (
        <View style={{marginTop: "50%"}}>
          <View style={{marginBottom: 5}}>
            <FormikTextInput name="username" placeholder="Username" />
          </View>
          <View style={{marginBottom: 5}}>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
          </View>
          <Button onPress={onSubmit} text="Sign in"/>
        </View>
      )}
    </Formik>
  </View>
);

export default SignIn;
