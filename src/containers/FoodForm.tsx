import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addFoodItem } from "../actions/foodList";

interface NewFoodValues {
  name: string;
  isVegetarian: boolean;
}

const FoodForm = () => {
  const initialValues: NewFoodValues = { name: "", isVegetarian: false };
  const [newFoodIdea, setNewFoodIdea] = useState(initialValues);

  const dispatch = useDispatch();

  const addFood = (values: NewFoodValues) => {
    dispatch(addFoodItem(values));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setNewFoodIdea(values);
          actions.setSubmitting(false);
          addFood(values);
        }}
      >
        <Form className="">
          <label htmlFor="name">Name of the meal</label>
          <Field id="name" name="name" placeholder="Rougail" />
          <label>
            <Field type="checkbox" name="isVegetarian" />
            {"Végétarien"}
          </label>
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
