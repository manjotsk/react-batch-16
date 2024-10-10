import React, { useState } from "react";

export const AddCardDetails = ({ onAdd }) => {
  const [carName, setCarName] = useState("Jonga");
  const [description, setDescription] = useState("The best jeep in the world");
  const [carImage, setCarImage] = useState(
    "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/24509/1571988914835/GeneralNews.jpg"
  );

  console.log({
    carName,
    description,
    carImage,
  });

  return (
    <div>
      <article className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl px-8 pb-8 max-w-sm mx-auto mt-24">
        <label>Car Name</label>
        <input
          className="border-2 border-gray-300"
          type="text"
          value={carName}
          onChange={(event) => {
            setCarName(event.target.value);
          }}
        />
        <label>Description</label>
        <input
          className="border-2 border-gray-300"
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Image</label>
        <input
          className="border-2 border-gray-300"
          type="text"
          value={carImage}
          onChange={(event) => {
            setCarImage(event.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            onAdd({
              carName,
              carImage,
              description,
            });
          }}
        >
          Add Car
        </button>
      </article>
    </div>
  );
};
