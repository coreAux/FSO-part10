import React from "react";
import { View } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

const SignIn = () => {
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
        onSubmit={(values) => {
          setTimeout(() => {
            console.log(`Username: ${values.username}`);
            console.log(`Password: ${values.password}`);
          }, 3000);
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
