import React from "react";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import useSignIn from "../hooks/useSignIn";

import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

export const SignInContainer = ({ onSubmit }) => {

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
  });

  return (
    <View>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        vildateOnMount={true}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput testID="usernameField" name="username" placeholder="Username" autoCapitalize="none" />
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput testID="passwordField" name="password" placeholder="Password" autoCapitalize="none" secureTextEntry />
            </View>
            <Button testID="submitButton" onPress={handleSubmit} disabled={!isValid || !dirty || isSubmitting} text="Sign in"/>
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const credentials = { username: values.username, password: values.password };
    try {
      await signIn(credentials);
      history.push("/");
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return <SignInContainer onSubmit={onSubmit}/>;
};

export default SignIn;
