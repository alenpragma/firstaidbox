import React from "react";

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='bg-gray-900'>
        <h2 className='text-2xl py-3 '>header</h2>
      </div>
      <div>
        <div>sidebar</div>
        <div>body</div>
      </div>
    </div>
  );
};

export default Dashboard;
