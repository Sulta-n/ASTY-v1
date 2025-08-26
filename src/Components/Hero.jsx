import React from "react";

const Hero = () => {
  return (
    <section className="background-image h-screen overflow-x-hidden mx-auto ">
      <div className=" size-full mx-auto max-w-[85rem] flex flex-col gap-y-10 justify-center items-start px-7 pt-7">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl font-extrabold tracking-wide text-primary">
          Find Your Perfect Home with ASTY <br />
          PROPERTIES
        </h1>
        <p className="text-white text-[1.5rem] md:text-2xl lg:text-3xl font-semibold">
          Trusted real estate solutions in Kwara State and others . <br />
          Buy , Rent or Invest with confidence
        </p>
        <a
          href="#contacts"
          className=" py-2.5 px-3 text-[1.2rem] md:py-3 md:px-5 bg-primary md:text-2xl text-white rounded-2xl font-semibold border-2 border-primary hover:bg-transparent  transition-colors duration-300 ease-in pointer primary-glow"
        >
          CONTACT US NOW
        </a>
      </div>
    </section>
  );
};

export default Hero;
