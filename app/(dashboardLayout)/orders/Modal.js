import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState("1");

  return (
    <div>
      <>
        {/* Background Overlay */}
        {isOpen && (
          <div className='fixed inset-0 z-50 px-2 flex items-center justify-center bg-black bg-opacity-50'>
            {/* Modal Container */}
            <div className='bg-[#EDEDED] py-6 min-h-[60%] px-5 rounded-lg shadow-md'>
              {/* Modal Content */}
              <div className=''>
                <div
                  onClick={onClose}
                  className='text-end cursor-pointer p-3 bg-gray-300 w-10 h-10 ms-auto flex  justify-center place-items-center rounded-full'
                >
                  X
                </div>
                <div className='max-w-screen  font-semibold  lg:w-[654px]  '>
                  <div>
                    <p className='text-md mb-[30px] text-center lg:text-2xl'>
                      UPDATE ORDER
                    </p>
                  </div>
                  <div>
                    <div className='flex flex-col gap-3'>
                      <input
                        type='text'
                        className='text-[#434343] w-full bg-inherit ps-3  rounded-lg text-lg h-10 border border-[#343230] outline-none'
                        placeholder='Search'
                      />

                      <input
                        type='text'
                        className='text-[#434343] w-full bg-inherit ps-3 rounded-lg text-lg h-10 border border-[#343230] outline-none'
                        placeholder='Search'
                      />
                      <input
                        type='text'
                        className='text-[#434343] w-full bg-inherit ps-3 rounded-lg text-lg h-10 border border-[#343230] outline-none'
                        placeholder='Search'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Modal;
