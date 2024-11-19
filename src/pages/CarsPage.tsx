import { useState } from "react";
import { AddCardDetails } from "../components/AddCardDetails";
import CardDetailsCard from "../components/CardDetailsCard";
import { useNavigate, useNavigation } from "react-router-dom";
import { AddCardDetailsForm } from "../components/AddCardDetailsForm";

const CarsPage = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
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
              key={car.id}
              id={car.id}
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
        <AddCardDetailsForm
          onAdd={(values: any) => {
            setCars([...cars, values]);
          }}
        />
      </div>
    </div>
  );
};

export default CarsPage;
