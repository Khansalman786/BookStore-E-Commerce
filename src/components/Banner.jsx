import React from "react";
import banner from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        {/* Right Side Div */}
        <div className="order-2 w-full md:w-1/2 mt-12 md:mt-32 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold ">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              lorem, ipsum dolor sit amet consectetur adipsicing elit. Dolor, et
              totam. tempora amet atque expedite, quae corrupt totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter your email to login"
              />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        {/* left Side Div */}
        <div className="order-1 w-full md:w-1/2 ">
          <img src={banner} alt="Books Image" className="w-92 h-92" />
        </div>
      </div>
    </>
  );
};

export default Banner;
