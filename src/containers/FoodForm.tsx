import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

interface NewFoodValues {
  name: string;
}

const FoodForm = () => {
  const [newFoodIdea, setNewFoodIdea] = useState("");
  const initialValues: NewFoodValues = { name: "" };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          setNewFoodIdea(values.name);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name">Name of the meal</label>
          <Field id="name" name="name" placeholder="Rougail" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {newFoodIdea && (
        <div>You have added this delicious meal: {newFoodIdea}</div>
      )}
    </div>
  );
};

export default FoodForm;
