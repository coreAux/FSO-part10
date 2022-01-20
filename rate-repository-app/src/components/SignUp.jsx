import React from "react";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";

import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

export const SignInContainer = ({ onSubmit }) => {

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1)
      .max(30)
      .required("This field is required"),
    password: yup
      .string()
      .min(5)
      .max(50)
      .required("This field is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("This field is required")
  });

  return (
    <View>
      <Formik
        initialValues={{
          username: "",
          password: "",
          passwordConfirmation: ""
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        vildateOnMount={true}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="username" placeholder="Username" autoCapitalize="none" />
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="password" placeholder="Password" autoCapitalize="none" secureTextEntry />
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="passwordConfirmation" placeholder="Confirm Password" autoCapitalize="none" secureTextEntry />
            </View>
            <Button testID="submitButton" onPress={handleSubmit} disabled={!isValid || !dirty || isSubmitting} text="Sign up" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const user = { username: values.username, password: values.password };
    try {
      await signUp(user);
      await signIn(user);
      history.push("/");
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return <SignInContainer onSubmit={onSubmit}/>;
};

export default SignUp;
