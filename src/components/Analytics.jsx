import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div id="analytics" className="w-full bg-white py-16 px-4 duration-500">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="Laptop with 3d charts hovering in front of it."
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold py-2 sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Consectetur accusantium necessitatibus pariatur iusto natus! Natus
            qui nisi nam ipsam debitis Sapiente earum repellat deleniti sunt
            accusantium? Totam quo quasi debitis nihil in debitis. Consequatur
            facere esse nostrum neque?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
