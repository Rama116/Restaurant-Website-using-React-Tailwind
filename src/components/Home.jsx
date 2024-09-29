// import React from 'react'

import Button from "../layouts/Buttons"
const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/veg1.avif')] bg-cover bg-no-repeat">
                <div className="w-full lg:w-2/3 space-y-5">
                    <h1 className="text-white font-semibold text-6xl">
                        Elevate Your Inner Foodie with Every Bite.
                    </h1>
                    <p className="text-white">
                        Amenities – Highlight the kind of amenities the hotel offers. If there is a pool, spa, gym, restaurant, or bar you are going to want to mention that. As well as free breakfast.
                    </p>
                    <div className="lg:pl-44">
                        <Button title="Order Now" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home