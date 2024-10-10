import React, { useEffect } from "react";

const CardDetailsCard = (props) => {
  const { name, carPhoto, description, onClick } = props;

  return (
    <div
      onClick={() => {
        onClick(description);
      }}
    >
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
        <img
          alt="Lord Alto"
          className="absolute inset-0 h-full w-full object-cover"
          src={carPhoto}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">{name}</h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-yellow-300">
          {description}
        </div>
      </article>
    </div>
  );
};

export default CardDetailsCard;
