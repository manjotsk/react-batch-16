import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const SimpleLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SimpleLayout;
