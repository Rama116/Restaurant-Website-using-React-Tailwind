// import React from 'react'
import DisheshCard from "../layouts/DishesCard"
import menu1 from "../assets/img/menu1.avif"
import menu2 from "../assets/img/menu2.avif"
import menu3 from "../assets/img/menu3.avif"
const Menu = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Premium Menu</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                <DisheshCard img={menu1} title="Delicous Dishes" price="$17.99" />
                <DisheshCard img={menu2} title="Delicous Dishes" price="$11.98" />
                <DisheshCard img={menu3} title="Delicous Dishes" price="$7.90" />
            </div>
        </div>
    </>
  )
}

export default Menu