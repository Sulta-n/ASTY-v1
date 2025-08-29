import React, { useState } from "react";
import { listedInfo, filterOptions } from "../lib/info";
import { cn } from "../lib/utils";
import { BiLocationPlus } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";

const Properties = () => {
  const [activeCategory, setactiveCategory] = useState("All");

  const filteredCategory = listedInfo.filter(
    (category) => activeCategory === "All" || category.filter === activeCategory
  );

  return (
    <section
      className="bg-background  min-h-screen mx-auto w-full text-white py-3.5 lg:scroll-mt-20"
      id="properties"
    >
      <div className="max-w-[85rem]  w-full h-full mx-auto px-7">
        <h1 className="text-center font-extrabold text-primary text-3xl md:text-5xl py-4 tracking-wide">
          Discover Top listed Properties
        </h1>

        <div className="flex gap-x-24 items-center justify-center flex-wrap gap-y-4">
          {filterOptions.map((option, i) => (
            <button
              key={i}
              className={cn(
                "text-[1.2rem] font-light tracking-tight",
                activeCategory === option
                  ? "bg-white/10 rounded-[1rem] p-2"
                  : ""
              )}
              onClick={() => setactiveCategory(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {filteredCategory.map((category, i) => (
            <div
              key={i}
              className="group flex flex-col gap-y-3 backdrop-blur-lg bg-white/10 p-3 rounded-[1rem] text-left  md:text-center border-2 border-transparent hover:border-white  hover:bg-transparent 
              shadow-lg hover:shadow-2xl
            
            transition-all duration-300 ease-in-out"
            >
              <div className="h-32 overflow-hidden rounded-lg ">
                <img
                  src={category.img}
                  className="w-full h-full object-cover rounded-lg object-center group-hover:scale-110 transition-transform duration-500"
                  alt="Listed property image"
                />
              </div>
              <h4 className=" text-[1.1rem] font-semibold text-primary tracking-tight">
                {category.info}
              </h4>
              <div className="flex items-center justify-start md:justify-center gap-x-3">
                <BiLocationPlus className="fill-green-500" size={20} />
                <p>{category.location}</p>
              </div>

              <div className="flex gap-x-24 md:gap-x-6 justify-start md:justify-around items-center px-2 ">
                {" "}
                <p className="flex gap-x-1.5 items-center">
                  <CiMoneyBill /> {category.price}
                </p>
                <a
                  href={`https://wa.me/2347042588748?text=${encodeURIComponent(
                    `Hi, I'm interested in the ${category.info} located at ${category.location}. Is it still available?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 lg:p-3 bg-primary rounded-lg text-[1rem] lg:font-semibold border-2 border-transparent hover:border-primary hover:text-primary hover:bg-transparent transition-all duration-300 ease-in-out self-end"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
