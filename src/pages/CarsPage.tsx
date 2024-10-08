import CardDetailsCard from "../components/CardDetailsCard";

const CarsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 gap-5">
        <CardDetailsCard
          name="Lord Alto (😈)"
          carPhoto="https://imgctcf.aeplcdn.com/thumbs/p-nc-p-s500-ver4/images/cars/generic/Maruti-Suzuki-Alto-Top-Used-Car-Under-One-Lakh-In-India.jpg"
          description="Bast caar in tha warld"
          onClick={(param1) => {
            alert(param1);
          }}
        />
        <CardDetailsCard
          name="Tesla Truck (🤡)"
          carPhoto="https://www.topgear.com/sites/default/files/cars-car/image/2023/11/1-Tesla-Cybertruck-review.jpg?w=1280&h=720"
          description="Bast Garbage in tha warld"
          onClick={(param1) => {
            alert(param1);
          }}
        />
      </div>
    </div>
  );
};

export default CarsPage;
