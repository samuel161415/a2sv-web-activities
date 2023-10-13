import React from 'react';

const SubscriptionForm = () => {
  return (
    <div className="h-[70vh] bg-gradient-to-b from-indigo-500 to-blue-500 flex items-center justify-center text-white">
      <div className=" p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">Subscribe Now to our Newsletter!</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input type="text" id="firstName" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input type="text" id="lastName" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            <input type="checkbox" className="mr-2" />
            Check if related to A2SV as a student, mentor or other
          </label>
        </div>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded w-full">Subscribe Now</button>
      </div>
    </div>
  );
};

export default SubscriptionForm;
