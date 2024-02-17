import { useState } from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";
import BookingTabble from "./components/BookingTabble";

//import backgroundImg from "../src/assets/banner.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url('../src/assets/flight.jpg')] w-full max-w-7xl mx-auto h-screen bg-cover bg-no-repeat rounded-xl  ">
      <section>
        <Header></Header>
        <Booking></Booking>
        <BookingTabble></BookingTabble>
      </section>
    </div>
  );
}

export default App;
