import React from "react";

const OrderDetailsModal = () => {
  return (
    <div className='mt-10'>
      <>
        {/* Background Overlay */}
        {isOpen && (
          <div className='fixed  max-h-screen mt-10 inset-0 z-50 px-2 flex items-center justify-center bg-black bg-opacity-50'>
            {/* Modal Container */}
            <div className='   bg-[#EDEDED]  py-6 min-h-[60%]  min-w-[50%] px-5 rounded-lg shadow-md'>
              {/* Modal Content */}
              <div className='   '>
                <div
                  onClick={onClose}
                  className='overflow  text-end cursor-pointer p-3 bg-gray-300 w-10 h-10 ms-auto flex  justify-center place-items-center rounded-full'
                >
                  X
                </div>
                <div className=' max-w-screen  font-semibold  lg:w-[654px]  '>
                  <div>
                    <p className='text-md mb-[30px] text-center lg:text-2xl'>
                      UPDATE ORDER
                    </p>
                  </div>
                  <form
                    className='modalSelect'
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <select
                      className='w-full min-w-80 h-12 border-2 border-black p-1 rounded-md'
                      name=''
                      id=''
                      {...register("status")}
                    >
                      <option className='h-12 p-5 py-7' value='Pending'>
                        Pending
                      </option>
                      <option value='Processing'>Processing</option>
                      <option value='Completed'>Completed</option>
                      <option value='Rejected'>Rejected</option>
                    </select>
                    <div className='mx-auto border flex'>
                      <button
                        className='py-2 px-4 rounded-lg mx-auto bg-[#2ACB35] text-white  text-md mt-5 '
                        type='submit'
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default OrderDetailsModal;
