import React from 'react';

function DeviceInformationDetail() {
  return (
    <div className="m-4">
      <div className="bg-white rounded-lg shadow p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">
          Device Information Preview
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Brand:</h2>
            <p className="text-lg font-semibold text-gray-800">Samsung</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Model:</h2>
            <p className="text-lg font-semibold text-gray-800">Galaxy S20</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Operating System:</h2>
            <p className="text-lg font-semibold text-gray-800">Android 11</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Display Size:</h2>
            <p className="text-lg font-semibold text-gray-800">6.2 Inches</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Memory Capacity:</h2>
            <p className="text-lg font-semibold text-gray-800">128 GB</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">RAM:</h2>
            <p className="text-lg font-semibold text-gray-800">8 GB</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Battery Capacity:</h2>
            <p className="text-lg font-semibold text-gray-800">4000 mAh</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-gray-600 mb-2">Camera:</h2>
            <p className="text-lg font-semibold text-gray-800">64 MP + 12 MP + 12 MP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceInformationDetail;
