import React, { useRef, useState } from "react";

// uncontrolled data input
export const AddCardDetailsForm = ({ onAdd }) => {
  const form = useRef(null);

  const validate = () => {
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    if (!data.id) {
      alert("Please enter a car id");
      return false;
    }

    if (!data.name) {
      alert("Please enter a car name");
      return false;
    }

    if (!data.description) {
      alert("Please enter a car description");
      return false;
    }

    if (!data.carPhoto) {
      alert("Please enter a car photo");
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
