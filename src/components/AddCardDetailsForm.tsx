import React, { useRef, useState } from "react";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  id: Yup.string().required("Car id is required"),
  name: Yup.string().required("Car name is required"),
  description: Yup.string().required("Description is required"),
  carPhoto: Yup.string().required("Car photo is required"),
});

// uncontrolled data input
export const AddCardDetailsForm = ({ onAdd }) => {
  const form = useRef(null);

  const validate = () => {
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      formSchema.validateSync(data, {
        abortEarly: false,
      });
    } catch (e) {
      console.log(e);

      return false;
    }

    return true;
  };

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());
        if (validate()) {
          onAdd(data);
        }
      }}
    >
      <article className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl px-8 pb-8 max-w-sm mx-auto mt-24">
        <label>Car Id</label>
        <input className="border-2 border-gray-300" name="id" />
        <label>Car Name</label>
        <input className="border-2 border-gray-300" type="text" name="name" />
        <label>Description</label>
        <input
          className="border-2 border-gray-300"
          type="text"
          name="description"
        />
        <label>Image</label>
        <input
          className="border-2 border-gray-300"
          type="text"
          name="carPhoto"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {}}
        >
          Add Car
        </button>
      </article>
    </form>
  );
};
