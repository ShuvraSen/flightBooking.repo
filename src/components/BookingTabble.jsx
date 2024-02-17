import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking } from "../redux/action";

const BookingTabble = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDElete = (e) => {
    dispatch(deleteBooking(parseInt(e.currentTarget.id)));
  };
  return (
    <>
      {data.length && (
        <div className="mx-4">
          <div className="bg-white rounded-lg w-full max-w-7xl mx-auto p-3 mt-9 ">
            <div className="overflow-x-auto ">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Date</th>
                      <th>Person</th>
                      <th>Ticket Class</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {data.map((data, i) => (
                      <tr key={i}>
                        <td>{data.from}</td>
                        <td>{data.to}</td>
                        <td>{data.date}</td>
                        <td>{data.person}</td>
                        <td>{data.ticket}</td>
                        <td>
                          <button
                            onClick={(e) => {
                              handleDElete(e);
                            }}
                            // id={`${data.payload.data.id}`}
                            id={`${data.id}`}
                          >
                            <FaTrashAlt />
                          </button>
                          {/* {data.id} */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingTabble;
