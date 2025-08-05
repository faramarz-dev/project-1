import React from "react";
import Image from "next/image";

export default function MainBanner() {
  return (
    <>
      <div className="w-full relative bg-amber-100">
        <div className="  ">
          <Image
            src={"/images/others/card.png"}
            alt="main banner"
            width={1200}
            height={200}
            className="mx-auto"
          />
        </div>

        <div className=" flex flex-col py-5 gap-4 lg:w-[25%] xs:w-full p-14 mx-auto items-center">
          <h3 className="text-6xl font-bold text-amber-600"> Install the app</h3>
          <p className="text-xs text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            distinctio dolores porro dele
          </p>

          <div className="flex gap-2">
            <div className=" bg-white py-1 px-1 rounded-lg">
              <span className="flex items-center gap-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="#ff8b17"
                  stroke="#ff8b17"
                >
                  <path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z" />
                  <path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z" />
                  <path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z" />
                  <path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z" />
                </svg>
                Google Play
              </span>
            </div>
            <div className=" bg-white py-1 px-1 rounded-lg">
              <span className="flex items-center gap-2 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="32"
                  height="32"
                  fill="#ff9224"
                  stroke="#ff9224"
                >
                  <path d="M17.564 13.862c-.413.916-.612 1.325-1.144 2.135-.742 1.13-1.79 2.538-3.087 2.55-1.152.01-1.448-.75-3.013-.741-1.564.008-1.89.755-3.043.744-1.297-.012-2.29-1.283-3.033-2.414-2.077-3.16-2.294-6.87-1.013-8.843.91-1.401 2.347-2.221 3.697-2.221 1.375 0 2.24.754 3.376.754 1.103 0 1.775-.756 3.365-.756 1.2 0 2.474.655 3.381 1.785-2.972 1.629-2.49 5.873.514 7.007zM12.463 3.808c.577-.742 1.016-1.788.857-2.858-.944.065-2.047.665-2.692 1.448-.584.71-1.067 1.763-.88 2.787 1.03.031 2.096-.584 2.715-1.377z" />
                </svg>
                App Store
              </span>
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d97706"
              fillOpacity="1"
              d="M0,192L21.8,197.3C43.6,203,87,213,131,213.3C174.5,213,218,203,262,165.3C305.5,128,349,64,393,80C436.4,96,480,192,524,240C567.3,288,611,288,655,266.7C698.2,245,742,203,785,197.3C829.1,192,873,224,916,234.7C960,245,1004,235,1047,240C1090.9,245,1135,267,1178,234.7C1221.8,203,1265,117,1309,96C1352.7,75,1396,117,1418,138.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            ></path>
          </svg>
          <div className="absolute bottom-0 left-96 hidden lg:block">
            <Image
              src={"/images/others/phone.png"}
              alt="main banner"
              width={600}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
