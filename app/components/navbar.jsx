'use client';

import React from 'react'
import Button from './button.jsx'
import { Iceland } from "next/font/google";

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const Navbar = () => {

  return (
    <div className='h-full flex items-center transition-all duration-100 justify-between px-[5px] w-full rounded-[30px] outline-2 outline-black dark:outline-white/80 outline-offset-2 backdrop-blur-[10px]'>
      <Button
        onClickLink={'/'}
        height="h-[83%]"
        width="w-[100px]"
        bgColor="bg-black dark:bg-[rgba(255,255,255,1)]"
        rounded="rounded-[23px]"
        textSize="text-[25px]"
        textColor="text-white"
        buttonValue="Home"
        fontFamily={iceland.className}
        letterSpacing="tracking-wide"
        onHover="hover:w-[140px] hover:bg-black hover:shadow-[0px_0px_7px_rgba(255,255,255,0.6)]"
        isSvgOn={true}
        paddingLeft="pl-[55px]"
        gap="gap-[2px]"
        svgForm={<svg className='dark:fill-black fill-white group-hover:fill-white transition duration-300' xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>}
        />
      <Button
        onClickLink={'/products'}
        height="h-[83%]"
        width="w-[100px]"
        bgColor="bg-black dark:bg-[rgba(255,255,255,1)]"
        rounded="rounded-[23px]"
        textSize="text-[25px]"
        textColor="text-white"
        buttonValue="Products"
        fontFamily={iceland.className}
        letterSpacing="tracking-wide"
        onHover="hover:w-[160px] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
        isSvgOn={true}
        paddingLeft="pl-[100px]"
        gap="gap-[10px]"
        svgForm={<svg className='dark:fill-black fill-white group-hover:fill-white transition duration-300' xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z"/></svg>}
      />
      <Button
        onClickLink={'/projects'}
        height="h-[83%]"
        width="w-[100px]"
        bgColor="bg-black dark:bg-[rgba(255,255,255,1)]"
        rounded="rounded-[23px]"
        textSize="text-[25px]"
        textColor="text-white"
        buttonValue="Projects"
        fontFamily={iceland.className}
        letterSpacing="tracking-wide"
        onHover="hover:w-[160px] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
        isSvgOn={true}
        paddingLeft="pl-[100px]"
        gap="gap-[10px]"
        svgForm={<svg className='dark:fill-black fill-white group-hover:fill-white transition duration-300' xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z"/></svg>}
        
      />
      <Button
        onClickLink={'/team'}
        height="h-[83%]"
        width="w-[100px]"
        bgColor="bg-black dark:bg-[rgba(255,255,255,1)]"
        rounded="rounded-[23px]"
        textSize="text-[25px]"
        textColor="text-white"
        buttonValue="Team"
        fontFamily={iceland.className}
        letterSpacing="tracking-wide"
        onHover="hover:w-[140px] hover:bg-black hover:shadow-[0_0px_5px_rgba(255,255,255,0.6)]"
        isSvgOn={true}
        paddingLeft="pl-[60px]"
        gap="gap-[5px]"
        svgForm={<svg className='dark:fill-black fill-white group-hover:fill-white transition duration-300' xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>}
      />
    </div>
  )
}

export default Navbar
