import Image from "next/image";
import React from "react";
import {
  BeakerIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className=" ">
          <Image src={"/assets/Logo.webp"} alt="/" height={100} width={150} />
        </div>
        <div className="flex text-[20px] space-x-10">
          <p>Female</p>
          <p> Male</p>
          {/* <p> Kids</p>
          <p> All Products</p> */}
        </div>

        <div className="flex items-center w-[30%] border-black border 1px  ">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <input type="text" placeholder="what you looking for" />
        </div>

        <div className="h-16 w-16 bg-slate-300 rounded-full relative">
  <p className="bg-red-700 w-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">0</p>
  <ShoppingCartIcon className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
</div>
      </div>
    </div>
  );
};

export default Navbar;
