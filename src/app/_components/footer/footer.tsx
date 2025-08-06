import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black/90 mt-14 text-white lg:py-20 lg:px-40 xs:py-14 xs:px-12 ">
        <div>
          <h4 className="text-3xl mb-10">Our top cities</h4>
          <div className="flex justify-between text-gray-400  xs:flex-col lg:flex-row gap-12">
            <ul>
              <li>San Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
            </ul>
            <ul>
              <li>Los Angeles</li>
              <li>Washington DC</li>
              <li>Seattle</li>
              <li>Portland</li>
              <li>Nashville</li>
            </ul>
            <ul>
              <li>San Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
            </ul>
            <ul>
              <li>Los Angeles</li>
              <li>Washington DC</li>
              <li>Seattle</li>
              <li>Portland</li>
              <li>Nashville</li>
            </ul>
            <ul>
              <li>San Francisco</li>
              <li>Miami</li>
              <li>San Diego</li>
              <li>East Bay</li>
              <li>Long Beach</li>
            </ul>
          </div>
          <hr className="mt-16 border-gray-400" />
          <p className="text-sm text-gray-400 mt-2">
            All rights Reserved
            <span className="text-white text-md">
              {" "}
              &copy; Your Company, 2021
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};
