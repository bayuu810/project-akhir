import React from "react"
import { FaUserFriends } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import Dasboard from './Dasboard'



function Sidebar() {
    return (

<div className="flex flex-cols-2 ">
<div className="flex min-h-screen bg-gray-100">
  {/* Sidebar */}
  <div className="w-64 bg-white shadow-md">
    <nav className="p-4">
      <ul className="space-y-4">
        <li className="text-xl text-gray-700 font-semibold block px-4 py-2 bg-gray-200 hover:bg-blue-400 rounded-md">
          <a href="#" className="flex items-center space-x-3">
            <RxDashboard />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="text-xl text-gray-700 block px-4 py-2 bg-gray-200 hover:bg-blue-400 rounded-md">
          <a href="/bambang" className="flex items-center space-x-3">
            <BiSolidUserDetail />
            <span>Siswa</span>
          </a>
        </li>
        <li className="text-xl text-gray-700 block px-4 py-2 bg-gray-200 hover:bg-blue-400 rounded-md">
          <a href="#" className="flex items-center space-x-3">
          <IoHome />
            <span>Kelas</span>
          </a>
        </li>
        <li className="text-xl text-gray-700 block px-4 py-2 bg-gray-200 hover:bg-blue-400 rounded-md">
          <a href="#" className="flex items-center space-x-3">
            <FaUserFriends />
            <span>Users</span>
          </a>
        </li>
        <li className="text-xl text-gray-700 block px-4 py-2 bg-gray-200 hover:bg-blue-400 rounded-md">
          <a href="#" className="flex items-center space-x-3">
            <TbReport />
            <span>Laporan</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

</div>
<div className="w-full">
<Dasboard/>
</div>
</div>

)
}
export default Sidebar;