import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import useSignIn from "../hooks/useSignIn";

import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

const SignIn = () => {
  const [signIn] = useSignIn();
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
        onSubmit={ async (values) => {
          console.log(`Username: ${values.username}`);
          console.log(`Password: ${values.password}`);

          const credentials = { username: values.username, password: values.password };

          console.log("creds: ", credentials);

          try {
            const { data } = await signIn(credentials);
            console.log("data: ", data);
          } catch (e) {
            console.log("error: ", e);
          }

        }}
        validationSchema={validationSchema}
        vildateOnMount={true}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <View style={{marginTop: 100}}>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="username" placeholder="Username" />
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            </View>
            <Button onPress={handleSubmit} disabled={!isValid || !dirty || isSubmitting} text="Sign in"/>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
