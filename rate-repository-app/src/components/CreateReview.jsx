import React from "react";
import { useHistory } from "react-router-native";

import { Formik } from "formik";
import * as yup from "yup";

import useCreateReview from "../hooks/useCreateReview";

import { View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

export const ReviewContainer = ({ onSubmit }) => {

  const validationSchema = yup.object().shape({
    repositoryName: yup
      .string()
      .required("This field is required"),
    ownerName: yup
      .string()
      .required("This field is required"),
    rating: yup
      .number()
      .typeError("This field must be integer")
      .min(0, "No less than 0")
      .max(100, "No more than 100")
      .required("This field is required")
      .integer("No decimals, only integers"),
    text: yup
      .string()
  });

  return (
    <View>
      <Formik
        initialValues={{
          repositoryName: "",
          ownerName: "",
          rating: 0,
          text: ""
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        vildateOnMount={true}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="ownerName" placeholder="Repository Owner Name" autoCapitalize="none"/>
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="repositoryName" placeholder="Repository Name" autoCapitalize="none" />
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="rating" placeholder="Rating between 0 and 100" autoCapitalize="none" keyboardType="number-pad"/>
            </View>
            <View style={{marginBottom: 15}}>
              <FormikTextInput name="text" placeholder="Review" autoCapitalize="sentences" multiline={true} textAlignVertical="top" style={{height:100}}/>
            </View>
            <Button testID="submitButton" onPress={handleSubmit} disabled={!isValid || !dirty || isSubmitting} text="Create a review" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const review = {
      repositoryName: values.repositoryName,
      ownerName: values.ownerName,
      rating: parseFloat(values.rating),
      text: values.text
    };

    try {
      const data = await createReview(review);
      history.push(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit}/>;
};

export default CreateReview;
