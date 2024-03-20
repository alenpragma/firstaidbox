"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import App from "./Pagination";
import OrderDetailsModal from "@/app/_components/dashboardLayout/orderDetailsModal";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [detailsModal, setDetailsModal] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [id, setId] = useState();
  const [data, setData] = useState();

  const openModal = (id) => {
    setModalOpen(true);
    setId(id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openDetailsModal = (data) => {
    setDetailsModal(true);
    setData(data);
  };
  const closeDetailsModal = () => {
    setDetailsModal(false);
  };

  const getData = () => {
    fetch("https://firstaidbox-admin-sigma.vercel.app/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const rejectOrder = (id) => {
    console.log(id);
    const res = confirm("are you went to Reject This order");

    if (!res) {
      console.log("Delete cancel");
      return;
    }
    fetch(`https://firstaidbox-admin-sigma.vercel.app/api/v1/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Rejected" }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        getData();
        alert("Rejected Successfull");
        // Handle success, e.g., show a success message or update UI
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <>
      <div className=' py-5 pb-10'>
        <h2 className='text-3xl text-center py-5 font-semibold'>Orders</h2>
        <div>
          <div className='flex justify-center align-middle mx-auto'>
            <div className='border-[#0f0d0d] overflow-x-scroll  w-[400px] md:w-[700px] lg:w-[940px] xl:w-[1200px] border-[1px] rounded-md mt-5'>
              <table className='  md:w-full lg:w-full  divide divide-[#BDBDBD]'>
                <thead className=' border-b-[1.5px] text-gray-800 border-[#000]'>
                  <tr>
                    <th className='px-2 py-3 text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Name
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Phone
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Email
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      District
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Police Station
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Zip
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Price
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      quantity
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Status
                    </th>
                    <th className='px-2 py-3   text-center text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-[#292929]'>
                  {orders?.data?.data?.map((order) => {
                    return (
                      <tr className='my-auto'>
                        <td className='py-4'>
                          <div className='ml-4'>
                            <div className='text-sm leading-5 font-medium text-[#1B1B1B]'>
                              {order?.firstName} {order?.lastName}
                            </div>
                          </div>
                        </td>
                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <div className='text-sm leading-5'>
                            {order?.phone}
                          </div>
                        </td>
                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.email}
                          </span>
                        </td>

                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.district}
                          </span>
                        </td>
                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.policeStation}
                          </span>
                        </td>
                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.zipCode}
                          </span>
                        </td>

                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.price}
                          </span>
                        </td>
                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.quantity}
                          </span>
                        </td>
                        <td className='px-2 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold  '>
                            {order?.status}
                          </span>
                        </td>
                        <td className='px-2 py-4 '>
                          <div className='flex gap-3'>
                            <button
                              onClick={() => openModal(order._id)}
                              className='bg-green-600 text-center px-3 py-1.5 text-white rounded-md text-xs'
                            >
                              Edit
                            </button>
                            {order.status == "Rejected" ? (
                              <button className='bg-red-500 w-16 py-1.5 text-white rounded-md text-xs'>
                                Rejected
                              </button>
                            ) : (
                              <button
                                onClick={() => rejectOrder(order?._id)}
                                className='bg-[#061336] w-16 py-1.5 text-white rounded-md text-xs'
                              >
                                Reject
                              </button>
                            )}
                            <button
                              onClick={() => openDetailsModal(order)}
                              className='bg-[#061336] w-16 py-1.5 text-white rounded-md text-xs'
                            >
                              Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* <!-- More table rows go here --> */}
                </tbody>
              </table>
              <div></div>
            </div>
          </div>
        </div>
        <OrderDetailsModal
          data={data}
          isOpen={detailsModal}
          onClose={closeDetailsModal}
        />
        <Modal
          id={id}
          getData={getData}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      </div>
    </>
  );
};

export default Orders;
