"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getData = () => {
    fetch("https://firstaidbox-admin-sigma.vercel.app/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className=' py-5 pb-10'>
        <h2 className='text-3xl text-center py-5 font-semibold  '>Orders</h2>
        <div>
          <div className='flex justify-center align-middle mx-auto'>
            <div className='border-[#0f0d0d] overflow-x-scroll  w-[400px] lg:w-[920px] border-[1px] rounded-md mt-5'>
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
                      Price
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      quantity
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Status
                    </th>
                    <th className='px-2 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
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
                            {!order?.status}
                          </span>
                        </td>
                        <td className='px-2 py-4 '>
                          <div className='flex gap-3'>
                            <button
                              onClick={openModal}
                              className='bg-gray-600 px-2 py-1 text-white rounded-md text-xs'
                            >
                              EDIT
                            </button>
                            <button className='bg-red-500 px-2 py-1 text-white rounded-md text-xs'>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {/* <!-- More table rows go here --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal isOpen={modalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default Orders;
