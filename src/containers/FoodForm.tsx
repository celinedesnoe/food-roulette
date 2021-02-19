import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { addFoodItem } from "../actions/foodList";
import * as Yup from "yup";

import TextInput from "../component/TextInput/TextInput";

interface NewFoodValues {
  name: string;
  isVegetarian: boolean;
}

const FoodForm = () => {
  const initialValues: NewFoodValues = { name: "", isVegetarian: false };
  const [newFoodIdea, setNewFoodIdea] = useState(initialValues);
  const [hasError, setHasError] = useState("");

  const dispatch = useDispatch();

  const addFood = (values: NewFoodValues) => {
    dispatch(addFoodItem(values));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().max(4, "Seulement 4 lettres"),
        })}
        onSubmit={(values, actions) => {
          setNewFoodIdea(values);
          actions.setSubmitting(false);
          // if (values.name !== "aaaa") {
          //   setHasError("NO GOOOOO");
          // }
          addFood(values);
        }}
      >
        <Form className="">
          <TextInput
            id="name"
            name="name"
<<<<<<< HEAD
            placeholder="Burger"
            label="Name of the meal"
=======
            placeholder="Noodles"
            label="Meal"
>>>>>>> 7384f90... fixup! change placeholder
            hasError={hasError}
          />
          {/* <label>
            <Field type="checkbox" name="isVegetarian" />
            {"Végétarien"}
          </label> */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {newFoodIdea.name && (
        <div
          style={{ backgroundColor: newFoodIdea.isVegetarian ? "green" : null }}
        >
          You have added this delicious meal: {newFoodIdea.name}
        </div>
      )}
    </div>
  );
};

export default FoodForm;
