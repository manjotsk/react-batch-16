import { useState } from "react";
import { AddCardDetails } from "../components/AddCardDetails";
import CardDetailsCard from "../components/CardDetailsCard";

const CarsPage = () => {
  const [cars, setCars] = useState([
    {
      name: "Lord Alto (😈)",
      carPhoto:
        "https://imgctcf.aeplcdn.com/thumbs/p-nc-p-s500-ver4/images/cars/generic/Maruti-Suzuki-Alto-Top-Used-Car-Under-One-Lakh-In-India.jpg",
      description: "Bast caar in tha warld",
    },
  ]);
  return (
    <div>
      <button
        onClick={() => {
          setCars([]);
        }}
      >
        Clear
      </button>
      <div className="grid grid-cols-3 grid-rows-3 gap-5">
        {cars.map((car) => {
          return (
            <CardDetailsCard
              key={car.name}
              name={car.name}
              carPhoto={car.carPhoto}
              description={car.description}
              onDelete={() => {
                const updatedCars = cars.filter((_car) => {
                  return _car.name !== car.name;
                });
                setCars(updatedCars);
              }}
            />
          );
        })}
        <AddCardDetails
          onAdd={(values: any) => {
            setCars([...cars, values]);
          }}
        />
      </div>
    </div>
  );
};

export default CarsPage;
