// import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-6 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
            <div className="w-full md:w-1/4">
                <h1 className="font-semibold text-xl pb-4">FoodieWeb</h1>
                <p className="text-sm">qoiywbfrioqy qcyqorcy;o qociy rqiry coiyrqo rcioqrt qtrciuqtr ciuqtr</p>
            </div>
            <div>
                <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
                <nav className="flex flex-col gap-2">
                    <a className="text-orange-400 transition-all cursor-pointer" href="">Dishes</a>
                    <a className="text-orange-400 transition-all cursor-pointer" href="">About</a>
                    <a className="text-orange-400 transition-all cursor-pointer" href="">Menu</a>
                </nav>
            </div>
            <div>
                <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
                <nav className="flex flex-col gap-2">
                    <a className="text-orange-400 transition-all cursor-pointer" href="">Our Dishes</a>
                    <a className="text-orange-400 transition-all cursor-pointer" href="">Premium Menu</a>
                </nav>
            </div>
            <div>
                <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                <nav className="flex flex-col gap-2">
                    <a className="text-orange-400 transition-all cursor-pointer" href="">ramagugan77@gmail.com</a>
                    <a className="text-orange-400 transition-all cursor-pointer" href="">+91 8778101198</a>
                    <a className="text-orange-400 transition-all cursor-pointer" href="">Social Media</a>
                </nav>
            </div>
        </div>
        <div>
            <p className="text-center py-4">
                @copyrights by <span className="text-orange-400">Rama</span>
            </p>
        </div>
    </div>
  )
}

export default Footer