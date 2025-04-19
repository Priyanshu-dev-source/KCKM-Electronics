import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import Button from "./button.jsx"
import Image from "next/image";
import Logo from "../assets/logo.png"
import { Exo_2, Iceland, Inter } from "next/font/google";

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
});

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="fixed top-[0px] h-[70px] w-dvw backdrop-blur-[5px] z-[4]"> */}
          <Image
            className="fixed top-[10px] left-[10px] md:h-[60px] h-[40px] w-[60px] md:w-[80px] z-[7]"
            alt="KCKM"
            src={Logo}
          />
          <div className="fixed cursor-pointer bg-transparent hidden md:flex justify-center items-center h-[40px] w-[120px] top-[20px] right-[20px] z-[7]">
            <Button
              onClickLink={"/contactUs"}
              height="h-[40px]"
              width="md:w-[120px] w-[110px]"
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

          <div className="fixed md:hidden flex items-center justify-center h-[35px] w-[40px] top-[15px] hover:scale-[109%] transition-all duration-200 cursor-pointer right-[20px] bg-white rounded-[5px] z-[7]">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X
                  className="cursor-pointer stroke-black hover:scale-[110%]"
                  size={28}
                />
              ) : (
                <Menu className="cursor-pointer stroke-black hover:scale-[110%]" size={28} />
              )}
            </button>
          </div>
          <div
            className={`fixed top-[70px] left-0 right-0 bg-black/90 text-white z-[6] rounded-b-xl transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0" : "-translate-y-[500px]"
            }`}
          >
            <div className="md:hidden flex flex-col items-center gap-4 p-6">
              <Button
                onClickLink={"/"}
                height="h-[97%]"
                width="w-[50%]"
                bgColor="bg-[rgba(255,255,255,1)]"
                rounded="rounded-[5px]"
                textSize="text-[25px]"
                textColor="text-white"
                buttonValue="Home"
                fontFamily={iceland.className}
                letterSpacing="tracking-wide"
                onHover="hover:w-[98%] hover:bg-black hover:shadow-[0px_0px_7px_rgba(255,255,255,0.6)]"
                isSvgOn={true}
                paddingLeft="pl-[55px]"
                gap="gap-[2px]"
                svgForm={
                  <svg
                    className="fill-black group-hover:fill-white transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                }
              />
              <Button
                onClickLink={"/products"}
                height="h-[97%]"
                width="w-[50%]"
                bgColor="bg-[rgba(255,255,255,1)]"
                rounded="rounded-[5px]"
                textSize="text-[25px]"
                textColor="text-white"
                buttonValue="Products"
                fontFamily={iceland.className}
                letterSpacing="tracking-wide"
                onHover="hover:w-[98%] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
                isSvgOn={true}
                paddingLeft="pl-[100px]"
                gap="gap-[10px]"
                svgForm={
                  <svg
                    className="fill-black group-hover:fill-white transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                  >
                    <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
                  </svg>
                }
              />
              <Button
                onClickLink={"/projects"}
                height="h-[97%]"
                width="w-[50%]"
                bgColor="bg-[rgba(255,255,255,1)]"
                rounded="rounded-[5px]"
                textSize="text-[25px]"
                textColor="text-white"
                buttonValue="Projects"
                fontFamily={iceland.className}
                letterSpacing="tracking-wide"
                onHover="hover:w-[98%] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
                isSvgOn={true}
                paddingLeft="pl-[100px]"
                gap="gap-[10px]"
                svgForm={
                  <svg
                    className="fill-black group-hover:fill-white transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                  >
                    <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z" />
                  </svg>
                }
              />
              <Button
                onClickLink={"/team"}
                height="h-[97%]"
                width="w-[50%]"
                bgColor="bg-[rgba(255,255,255,1)]"
                rounded="rounded-[5px]"
                textSize="text-[25px]"
                textColor="text-white"
                buttonValue="Team"
                fontFamily={iceland.className}
                letterSpacing="tracking-wide"
                onHover="hover:w-[98%] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
                isSvgOn={true}
                paddingLeft="pl-[60px]"
                gap="gap-[5px]"
                svgForm={
                  <svg
                    className="fill-black group-hover:fill-white transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                  >
                    <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
                  </svg>
                }
              />
              <Button
                onClickLink={"/contactUs"}
                height="h-[36px]"
                width="w-[50%]"
                bgColor="bg-[rgba(255,255,255,1)]"
                rounded="rounded-[5px]"
                textSize="text-[25px]"
                textColor="text-white"
                buttonValue="Contact Us"
                fontFamily={iceland.className}
                letterSpacing="tracking-wide"
                onHover="hover:w-[98%] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
                isSvgOn={true}
                paddingLeft="pl-[85px]"
                gap="gap-[5px]"
                svgForm={
                  <svg
                    className="fill-black group-hover:fill-white transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                }
              />
            </div>
          </div>
        {/* </div> */}
    </>
  )
}

export default MobileNavbar
