"use client";

import { FaDownload, FaArrowUp, FaMicrochip, FaMemory, FaEllipsisH } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3 flex flex-col justify-center">
          {/* Download Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 border border-gray-300 rounded-lg">
                <FaDownload className="text-2xl text-gray-500" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Download</p>
                <p className="text-2xl font-semibold">
                  63.3<small className="text-sm">mbps</small>
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 border border-gray-300 rounded-lg">
              <FaArrowUp className="text-green-500" />
              <span className="ml-1 text-green-500">9.2%</span>
            </div>
          </div>

          {/* Upload Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 border border-gray-300 rounded-lg">
                <FaArrowUp className="text-2xl text-gray-500" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Upload</p>
                <p className="text-2xl font-semibold">
                  63.3<small className="text-sm">mbps</small>
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 border border-gray-300 rounded-lg">
              <FaArrowUp className="text-green-500" />
              <span className="ml-1 text-green-500">9.2%</span>
            </div>
          </div>

          {/* Processor Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 border border-gray-300 rounded-lg">
                <FaMicrochip className="text-2xl text-gray-500" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Processor</p>
                <p className="text-2xl font-semibold">
                  63.3<small className="text-sm">mbps</small>
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 border border-gray-300 rounded-lg">
              <FaArrowUp className="text-green-500" />
              <span className="ml-1 text-green-500">9.2%</span>
            </div>
          </div>

          {/* Memory Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 border border-gray-300 rounded-lg">
                <FaMemory className="text-2xl text-gray-500" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">Memory</p>
                <p className="text-2xl font-semibold">
                  63.3<small className="text-sm">mbps</small>
                </p>
              </div>
            </div>
            <div className="flex items-center p-2 border border-gray-300 rounded-lg">
              <FaArrowUp className="text-green-500" />
              <span className="ml-1 text-green-500">9.2%</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Guest Monitoring</h2>
            <FaEllipsisH className="text-gray-500" />
          </div>
          <p className="text-gray-500 mb-2">You are seeing active and inactive users.</p>
          <hr className="border-gray-300 mb-2 w-full" />
          <div className="flex justify-end items-center text-green-500 mb-6">
            <FaArrowUp />
            <span className="ml-1">60.4%</span>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-200"></div>
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-200"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              ></div>
              <div className="absolute top-0 left-0 w-32 h-32 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500">Total Guest</p>
                  <p className="text-3xl font-semibold">12,040</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <p className="text-gray-500">Active</p>
              <p className="text-xl font-semibold text-black">8,040</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-gray-500">Inactive</p>
              <p className="text-xl font-semibold text-black">4,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
