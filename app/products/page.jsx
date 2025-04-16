"use client";

import Navbar from "../components/navbar";
import Button from "../components/button.jsx";
import Image from "next/image";
// import Logo from "/assets/logo.png";
import React from "react";

import { Exo_2, Iceland, Inter } from "next/font/google";

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: "300",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "700",
});

const Products = () => {
  return (
    <>
      <div
        className={`min-h-screen bg-black flex items-center justify-center ${inter.className} text-white text-[100px]`}
      >
        Products
      </div>
      <Image
        className="fixed top-[10px] left-[10px] h-[60px] w-[80px] z-[7]"
        alt="KCKM"
        src={"/assets/logo.png"}
        width={100}
        height={100}
      />
      <div
        className={`fixed flex justify-center items-center h-[50px] w-[520px] bottom-[20px] left-[500px] z-[5] `}
      >
        <Navbar />
      </div>
      <div className="fixed cursor-pointer bg-transparent flex justify-center items-center h-[40px] w-[120px] top-[20px] right-[20px] z-[7]">
        <Button
          onClickLink={"/contactUs"}
          height="h-[40px]"
          width="w-[120px]"
          bgColor="bg-white"
          rounded="rounded-[10px]"
          textSize="text-[21px]"
          textColor="text-black"
          buttonValue="Contact Us"
          fontFamily={iceland.className}
          letterSpacing="tracking-wide"
          onHover="hover:scale-[110%]"
          isSvgOn={false}
          paddingLeft="pl-[0px]"
        />
      </div>
    </>
  );
};

export default Products;
