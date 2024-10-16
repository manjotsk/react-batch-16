import React from "react";
import { useNavigation, useParams, useSearchParams } from "react-router-dom";

// details of Lord Alto
const CarDetailsPage = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  return (
    <div>
      <h1>Car Details</h1>
      <div>
        <h2>Car ID: {params.carId}</h2>
        <h3>Car Name: Lord Alto</h3>
      </div>
    </div>
  );
};

export default CarDetailsPage;
