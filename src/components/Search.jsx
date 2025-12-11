import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'

const Search = () => {
  return (
    <div className='search '>
      <div className='w-full'>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <button className='bg-gradient-to-r from-blue-500 to-gray-500 
          hover:from-blue-600 hover:to-gray-600 text-white font-bold 
          px-3 py-2 rounded-full text-sm sm:text-base transition-all duration-300 flex-1'>
            <span>Economy</span>
          </button>
          <button className='bg-gradient-to-r from-blue-500 to-gray-500 
          hover:from-blue-600 hover:to-gray-600 text-white font-bold 
          px-4 py-3 rounded-full text-sm sm:text-base transition-all duration-300 flex-1'>
            <span>Business Class</span>
          </button>
          <button className='bg-gradient-to-r from-blue-500 to-gray-500 
          hover:from-blue-600 hover:to-gray-600 text-white font-bold 
          px-4 py-3 rounded-full text-sm sm:text-base transition-all duration-300 flex-1'>
            <span>First Class</span>
          </button>
        </div>

        {/* Search Inputs */}
        <div className="space-y-3">

          {/* Location */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <HiOutlineLocationMarker className='text-gray-600' />
              <h4 className="text-gray-700 font-medium">Location</h4>
            </div>
            <input 
              type="text" 
              placeholder='Your Destination' 
              className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>

          {/* Travelers */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <RiAccountPinCircleLine className='text-gray-600' />
              <h4 className="text-gray-700 font-medium">Travelers</h4>
            </div>
            <input 
              type="text" 
              placeholder='Add guests' 
              className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>

          {/* Check In */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <RxCalendar className='text-gray-600' />
              <h4 className="text-gray-700 font-medium">Check In</h4>
            </div>
            <input 
              type="date" 
              className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>

          {/* Check Out */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <RxCalendar className='text-gray-600' />
              <h4 className="text-gray-700 font-medium">Check Out</h4>
            </div>
            <input 
              type="date" 
              className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
            />
          </div>

          {/* Search Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 
          hover:from-orange-600 hover:to-red-600 text-white font-bold 
          py-2 sm:py-2 rounded-full text-base sm:text-lg transition-all duration-300 mt-4">
            Search Flight
          </button>

        </div>

      </div>
    </div>
  )
}

export default Search;