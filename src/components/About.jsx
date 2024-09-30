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
          <p>We re The Best..We re The Best..

            We re The Best..qivuntioqy q3yhoq ovyq qv qu qrgiqr qiu2rtvqio iu wrgte yu gwgvuky</p>
          <p>We re The Best..qivuntioqy q3yhoq ovyq qv qu qrgiqr  qiu2rtvqio iu wrgte yu gwgvuky..We re The Best..
          We re The Best..qivuntioqy q3yhoq ovyq qv qu qrgiqr qiu2rtvqio iu wrgte yu gwgvuky
            We re The Best..qivuntioqy q3yhoq ovyq qv qu qrgiqr qiu2rtvqio iu wrgte yu gwgvuky</p>
          <div className="flex justify-center md:justify-start">
            <Button title="Learn More" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About