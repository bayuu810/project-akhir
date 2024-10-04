import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineSick, MdMenuBook } from 'react-icons/md';
import { BsEmojiWink, BsEmojiExpressionless } from 'react-icons/bs';
import { BsThreeDots } from "react-icons/bs";


function Dasboard() {
  return (
    <div className='bg-gray-300 px-4 py-6'>
      <h1 className='text-bold text-2xl mb-4 '>Dasboard <p className="text-gray-500">Home/Dasboard</p></h1>
      <div className='grid grid-cols-2 gap-4'>
        {/* Card 1 */}      
        <div className="bg-white shadow rounded-lg p-6 mb-6 relative">
  <div className="absolute top-2 right-2">
    <BsThreeDots className="text-3xl text-gray-600 " />
  </div>
  <div className="flex items-center justify-between gap-6">
    <div>
      <h3 className="text-lg font-semibold text-gray-600 mb-2">Siswa</h3>
      <div className="flex items-center space-x-2">
        <div className="border-2 border-gray-600 p-2 rounded">
          <FaUserFriends className="text-3xl" />
        </div>
        <p className="text-3xl font-bold text-indigo-600">5</p>
      </div>
      <h3 className="text-lg font-semibold text-green-500 mb-2 flex items-center">
       Dari
      <p className="ml-2 text-gray-500">2 Kelas</p>
       </h3>
        </div>
         </div>
         </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                Sakit
                <p className="ml-2 text-gray-500">| Bulan Ini</p>
              </h3>
              <div className="flex items-center space-x-2">
                <div className="text-3xl border-2 border-gray-300 p-2 rounded-full">
                  <MdOutlineSick className='text-3xl' />
                </div>
                <p className="text-4xl font-bold text-blue-900">0</p>
              </div>
              <h3 className="text-lg font-semibold text-green-500 mb-2 flex items-center">
             Total
             <span className="text-xl text-gray-400 ml-2">0 Siswa</span>
             </h3>

            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Card 3 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                Izin
                <p className='ml-2 text-gray-500'>| Bulan Ini</p>
              </h3>
              <div className="flex items-center space-x-2">
                <div className="text-3xl border-2 border-gray-600 p-2 rounded-full">
                  <BsEmojiWink className='text-3xl' />
                </div>
                <p className="text-4xl font-bold text-blue-900">0</p>
              </div>
              <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
              Total
          <p className="text-xl text-gray-500 ml-2">0 Siswa</p>
          </h3>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                Alpa
                <p className='ml-2 text-gray-500'>| Bulan Ini</p>
              </h3>
              <div className="flex items-center space-x-2">
                <div className="text-3xl border-2 border-gray-600 p-2 rounded-full">
                  <BsEmojiExpressionless className='text-3xl' />
                </div>
                <p className="text-4xl font-bold text-blue-900">0</p>
              </div>
            <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
              Total
          <p className="text-xl text-gray-500 ml-2">0 Siswa</p>
          </h3>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Kelola</h3>
              <div className="flex items-center space-x-2">
                <div className="border-2 border-gray-600 p-2 rounded">
                  <MdMenuBook className='text-3xl' />
                </div>
                <p className="text-3xl font-bold text-indigo-600">Laporan</p>
              </div>
              <p className="text-xl text-gray-500 mt-3">Dari 2 Kelas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
