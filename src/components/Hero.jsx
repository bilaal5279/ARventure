import React from 'react'

const Hero = () => {
  return (
<div className="bg-white shadow bg-cover bg-center bg-no-repeat w-full md:flex md:flex-col" style={{ backgroundImage: "url('../src/assets/mountain-landscape-with-car-driving-down-road.jpg')", height: '400px' }}>
        <div className="flex flex-row p-7">
            <div className="w-1/3 p-4">
                <div className="text-white text-3xl">ARventure</div>
            </div>
            <div className="w-1/3 p-4 text-center">
                <div className="flex items-center justify-center w-full">
                    <div className="w-full">
                        <input className="block w-full bg-black bg-opacity-50 py-4 pl-10 pr-3 leading-5 placeholder-gray-500 text-white rounded-full focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-400" type="text" placeholder="Search" />
                    </div>
                </div>

            </div>
            <div className="w-1/3 p-4 text-right">
                {/* <!-- Login button --> */}
                <button className="bg-transparent border-2 hover:border-2 border-white-200 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 opacity-80 hover:opacity-100 mr-2">
                    Log In
                </button>

                {/* <!-- Logout button --> */}
                <button className="bg-transparent border-2 hover:border-2 border-red-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 opacity-80 hover:opacity-100 ml-2">
                    Sign Up
                </button>

            </div>
        </div>
        <div className="flex flex-row p-7">
            <div className="w-1/4 p-4 text-center">

            </div>
            <div className="w-1/2 p-4 text-center">
                <div className="text-6xl text-white font-extrabold">Discover New Horizons</div>
            </div>
            <div className="w-1/4 p-4 text-center">

            </div>
        </div>
        </div>
  )
}

export default Hero