"use client";

import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getData = () => {
    fetch("http://localhost:5000/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };
  console.log(orders);
  useEffect(() => {
    getData();
  }, []);
  console.log(orders?.data);

  return (
    <>
      <div className=' py-5 pb-10'>
        <h2 className='text-3xl text-center py-5   font-semibold  '>Orders</h2>
        <div>
          <div className='flex justify-center align-middle mx-auto'>
            <div className='border-[#0f0d0d] overflow-x-scroll  w-[400px] lg:w-[900px] border-[1px] rounded-md mt-5'>
              <table className='  md:w-full lg:w-full  divide divide-[#BDBDBD]'>
                <thead className=' border-b-[2px] text-gray-600 border-[#000]'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Name
                    </th>
                    <th className='px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Phone
                    </th>
                    <th className='px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Email
                    </th>
                    <th className='px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Price
                    </th>
                    <th className='px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      quantity
                    </th>
                    <th className='px-6 py-3  text-left text-xs leading-4 font-medium  uppercase tracking-wider'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className=' divide-y divide-[#BDBDBD]'>
                  {/* <!-- Table rows go here --> */}
                  {orders?.data?.data?.map((order) => {
                    return (
                      <tr className=' '>
                        {/* {console.log(order, "oooo")} */}
                        <td className='pr-6 py-4 whitespace-no-wrap'>
                          <div className='ml-4'>
                            <div className='text-sm leading-5 font-medium text-[#1B1B1B]'>
                              {order?.firstName} {order?.lastName}
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                          <div className='text-sm leading-5 text-[#1B1B1B]'>
                            {order?.phone}
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                            {order?.email}
                          </span>
                        </td>

                        <td className='px-6 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                            {order?.price}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                            {order?.quantity}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-no-wrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full '>
                            {!order?.status ? "Pending" : "Success"}
                          </span>
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
      </div>
    </>
  );
};

export default Orders;
