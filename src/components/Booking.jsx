import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/action";
const Booking = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length;
  const [newBookingData, setNewBookingData] = useState({});
  const handleForm = (e) => {
    e.preventDefault();
    if (size >= 3) {
      alert("can not buy more than 3");
    } else {
      if (Object.keys(newBookingData).length === 5) {
        dispatch(makeBooking({ ...newBookingData, id: size + 1 }));
      } else {
        alert("please select data properly");
      }
    }
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    const getBookingData = { ...newBookingData };
    getBookingData[e.target.name] = e.target.value;
    setNewBookingData(getBookingData);
  };
  console.log(newBookingData);
  return (
    <div className="sm:mt-[170px] mt-[50px] mx-4">
      <div className="bg-white rounded-lg w-full max-w-7xl mx-auto">
        <form
          //onSubmit={handleForm}
          className="   flex flex-col md:flex-row justify-between items-center"
        >
          {/* Destination From */}
          <div className="px-2 py-2.5 border-r-2 flex-1">
            <p>Destination From</p>

            <div className=" ">
              <select
                onChange={(e) => handleChange(e)}
                name="from"
                id="from"
                className="px-2 w-full"
                required
              >
                <option value="">Please Select</option>
                <option>New York</option>
                <option>Florida</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          {/* Destination to */}
          <div className="px-2 py-2.5 border-r-2 flex-1">
            <p>Destination To</p>

            <div>
              <select
                onChange={(e) => handleChange(e)}
                name="to"
                id="to"
                className="px-2 w-full"
                required
              >
                <option value="">Please Select</option>
                <option>New York</option>
                <option>Florida</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="px-2 py-2.5 border-r-2 flex-1">
            <p>Journey Date</p>

            <div>
              <input
                onChange={(e) => handleChange(e)}
                type="date"
                name="date"
                id="date"
                className="px-2 w-full"
                required
              />
            </div>
          </div>
          <div className="px-2 py-2.5 border-r-2 flex-1">
            <p>Guest Number</p>

            <div>
              <select
                required
                name="person"
                id="person"
                className="px-2 w-full"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Please Select</option>
                <option>Person 1</option>
                <option>Person 2</option>
                <option>Person 3</option>
                <option>Person 4</option>
              </select>
            </div>
          </div>
          <div className="px-2 py-2.5 border-r-2 flex-1">
            <p>Class Name</p>

            <div>
              <select
                onChange={(e) => handleChange(e)}
                required
                name="ticket"
                id="ticket"
                className="px-2 w-full"
              >
                <option value="">Please Select</option>
                <option>Economy</option>
                <option>Business </option>
              </select>
            </div>
          </div>
          <button
            onClick={(e) => handleForm(e)}
            type="submit"
            className="bg-blue-600  p-11 flex items-center text-xl font-semibold "
          >
            <TiPlus className="mr-3 " /> Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
