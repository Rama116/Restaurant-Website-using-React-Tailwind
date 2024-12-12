// import React from 'react'
import abt from "../assets/img/abt.avif"
import Button from "../layouts/Buttons"
const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
        <img className="md:h-[30%] md:w-[50%]" src={abt} alt="About" />
        <div className="space-y-4 space-x-2 md:pl-4 lg:pt-14">
          <h1 className="font-semibold md:pl-4 text-4xl text-center md:text-start">Why Choose Us?</h1>
          <p>Welcome to Foodiee-Staurant, where passion for food meets a love for community.At Foodiee-Staurant, we believe that food is more than just a meal—it's an experience to be savored and shared. Our journey began with a simple idea: to create a welcoming space where families and friends can gather to enjoy delicious, homemade dishes crafted from the freshest ingredients.
          We are committed to serving our guests with exceptional quality and service. Our menu features a diverse selection of dishes, inspired by traditional recipes and modern culinary trends. 
          We invite you to join us at Foodiee-Staurant and experience our culinary creations for yourself. Whether you're dining in or ordering for takeout, we promise to deliver a delicious meal with every visit. Thank you for being a part of our journey. We look forward to serving you!
          </p>
          <div className="flex justify-center md:justify-start">
            <Button title="Learn More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About