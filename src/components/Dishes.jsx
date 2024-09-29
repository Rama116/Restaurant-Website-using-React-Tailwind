// import React from 'react'
import DishesCard from "../layouts/DishesCard"
import img1 from "../assets/img/img1.avif"
import chi from "../assets/img/chick.avif"
import nood from "../assets/img/noodles.avif"
import pasta from "../assets/img/pasta.avif"
import dosa from "../assets/img/dosa.avif"
import bir from "../assets/img/biriyani.avif"

const Dishesh = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-8">
            <h1 className="text-4xl font-semibold text-center pt-24 pb-18">Our Dishes</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                <DishesCard img={img1} title="Tasty Dish" price="$7.79" />
                <DishesCard img={chi} title="Tasty Dish" price="$12.99" />
                <DishesCard img={nood} title="Tasty Dish" price="$5.15" />
                <DishesCard img={pasta} title="Tasty Dish" price="$23.00" />
                <DishesCard img={dosa} title="Tasty Dish" price="$2.43" />
                <DishesCard img={bir} title="Tasty Dish" price="$19.79" />
            </div>
        </div>
    </>
  )
}

export default Dishesh