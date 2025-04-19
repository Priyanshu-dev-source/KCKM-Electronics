"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Mouse } from "lucide-react"
// import { usePathname } from 'next/navigation';
import Image from "next/image";
import Button from "./components/button.jsx";
import MobileNavbar from "./components/mobileNavbar.jsx"
import Footer from "./components/footer.jsx"
import Navbar from "./components/navbar.jsx";
import IMC from "../public/assets/imc.jpg";
import IIT from "../public/assets/iit.jpg";
import Jamoo from "../public/assets/jamoo.jpg";
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

export default function Home() {


  // const pathname = usePathname()
  const [leftDeltaValue, setLeftDeltaValue] = useState(0.0);
  const [rightDeltaValue, setRightDeltaValue] = useState(0.0);
  const [zIndexControl, setZInxedControl] = useState(7);
  const [scaleDeltaValue, setScaleDeltaValue] = useState(1);
  const [headingOpacity, setHeadingOpacity] = useState(1);
  const [headingDisplay, setHeadingDisplay] = useState("fixed");
  const [leftSvgTranslateValue, setLeftSvgTranslateValue] = useState("-0px");
  const [rightSvgTranslateValue, setRightSvgTranslateValue] = useState("0px");
  const [isImageScrolled, setIsImageScrolled] = useState(false);
  const [scrollDisplay, setScrollDisplay] = useState("fixed")
  const [scrollVal, setScrollVal] = useState();
  const imageRef = useRef(null);
  const previousDeltaRef = useRef(null);
  const touchStartY = useRef(null);

  const handleScrollDelta = (deltaY) => {
    setScrollVal(deltaY);
    if (previousDeltaRef.current === deltaY) return;
    previousDeltaRef.current = deltaY;

    // Scale
    setScaleDeltaValue((prev) => {
      const newVal =
        deltaY < 0 ? Math.max(prev - 0.02, 1) : Math.min(prev + 0.05, 2);
      return newVal;
    });

    // Left scroll logic
    setLeftDeltaValue((prev) => {
      const newVal = prev + deltaY * -2.3;
      if (newVal <= 0) {
        setLeftSvgTranslateValue(`${newVal}px`);
        const finalLeft = -800;
        const clampedVal = Math.max(Math.min(newVal, 0), finalLeft);
        const opacity = (clampedVal - finalLeft) / Math.abs(finalLeft);
        setHeadingOpacity(opacity);

        if (opacity <= 0) {
          setScrollDisplay("hidden")
          setZInxedControl(2);
          setHeadingDisplay("none");
          document.body.style.overflowY = "auto";
        } else {
          setScrollDisplay("fixed")
          setZInxedControl(7);
          setHeadingDisplay("fixed");
          document.body.style.overflowY = "hidden";
        }

        return newVal;
      }
      return prev;
    });

    // Right scroll logic
    setRightDeltaValue((prev) => {
      const newVal = prev + deltaY * 2.3;
      if (newVal >= 0.0) {
        setRightSvgTranslateValue(`${newVal}px`);
        return newVal;
      }
      return prev;
    });
  };

  // Desktop Wheel Support
  useEffect(() => {
    const handleWheel = (event) => {
      handleScrollDelta(event.deltaY);
    };



    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Mobile Touch Support
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (touchStartY.current === null) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      handleScrollDelta(deltaY);
      touchStartY.current = currentY;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Scroll trigger based on value
  useEffect(() => {
    const newVal = leftDeltaValue + scrollVal * -2.3;
    if (!isImageScrolled) {
      const finalLeft = -800;
      const clampedVal = Math.max(Math.min(newVal, 0), finalLeft);
      const opacity = (clampedVal - finalLeft) / Math.abs(finalLeft);

      if (opacity <= 0) {
        window.scroll({ top: window.screenTop + 730, behavior: "smooth" });
        setIsImageScrolled(true);
      } else {
        window.scroll({ top: 0 });
      }
    }

    if (isImageScrolled && window.pageYOffset < 750 && newVal > 0) {
      setIsImageScrolled(false);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [scrollVal, leftDeltaValue]);

  useEffect(() => {
    const newVal = leftDeltaValue + scrollVal * -2.3;
    if (!isImageScrolled) {
      const finalLeft = -800;
      const clampedVal = Math.max(Math.min(newVal, 0), finalLeft);
      const opacity = (clampedVal - finalLeft) / Math.abs(finalLeft);
      if (opacity <= 0) {
        if (isImageScrolled) return;
        window.scroll({ top: window.screenTop + 750, behavior: "smooth" });
        setIsImageScrolled(true);
      } else {
        window.scroll({
          top: 0,
        });
      }
    }
    if (isImageScrolled && window.pageYOffset < 750 && newVal > 0) {
      setIsImageScrolled(false);
      window.scroll({
        top: 0,
        behaviour: "smooth",
      });
    }
  }, [scrollVal, leftDeltaValue]);

  return (
    <>
      <div
        className={`min-h-screen bg-black overflow-x-hidden transition-all duration-50 flex items-center justify-center`}
      >
        <div className="fixed top-[0px] h-[70px] w-dvw backdrop-blur-[5px] z-[4]">
          <MobileNavbar/>
        </div>
        <div
          className={`fixed hidden md:flex justify-center items-center h-[50px] w-[520px] bottom-[20px] left-[500px] z-[7]`}
        >
          <Navbar />
        </div>
        <div className={`${scrollDisplay} h-[40px] w-[150px] border-2 hover:scale-[110%] cursor-pointer transition-all duration-200 animate-bounce border-white bg-black/90 rounded-[30px] z-[11] bottom-[15px] flex items-center justify-center text-[20px] gap-[10px] text-white pb-[2px] tracking-wider font-bold`}>
          <Mouse/>
          SCROLL
        </div>
        <div
          className={`relative md:bottom-[0px] bottom-[50px] ${headingDisplay} h-[550px] w-[800px] z-[11] flex items-center justify-center flex-col`}
        >
          <h1
            style={{
              transform: `scale(${scaleDeltaValue})`,
              opacity: headingOpacity,
            }}
            className={`drop-shadow-[20px_10px_25px_rgba(0,0,0,1)] ${inter.className} transform transition-ease-out duration-80`}
            id="text3d"
          >
            KCKM
          </h1>
          <h4
            style={{
              transform: `scale(${scaleDeltaValue})`,
              opacity: headingOpacity,
            }}
            id="text3d1"
            className={`drop-shadow-[20px_10px_25px_rgba(0,0,0,1)] ${inter.className} transform transition-ease-in-out duration-80`}
          >
            ELECTRONICS
          </h4>
        </div>
        <div
          id="left-svg"
          style={{ transform: `translateX(${leftSvgTranslateValue})` }}
          className="fixed overflow-hidden md:bottom-[0px] bottom-[-74px] z-[10] left-[-1220px] md:left-[-260px] h-[900px] md:h-dvh md:w-[70%] w-[1600px] transform transition-ease-in-out duration-80"
        >
          <svg
            className="drop-shadow-[5px_5px_8px_rgba(209,213,219,0.2)] scale-[2.2] w-[1150px] md:w-[691px] h-[900px] md:h-[769px]"
            width="904"
            height="809"
            viewBox="0 0 1204 809"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_8_2)">
              <path
                d="M4.50008 0.255744L4.50026 800.5L1199.52 800.5L927.518 410.5L1199.52 0.255758L4.50008 0.255744Z"
                fill="#D9D9D9"
              />
              <path
                d="M4.50008 0.255744L4.50026 800.5L1199.52 800.5L927.518 410.5L1199.52 0.255758L4.50008 0.255744Z"
                fill="black"
                fillOpacity="0.94"
              />
              <path
                d="M4.50008 0.255744L4.50026 800.5L1199.52 800.5L927.518 410.5L1199.52 0.255758L4.50008 0.255744Z"
                fill="url(#paint0_linear_8_2)"
                fillOpacity="0.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_8_2"
                x="0.500122"
                y="0.255737"
                width="1203.02"
                height="808.244"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_8_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_8_2"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_8_2"
                x1="556.5"
                y1="541"
                x2="180"
                y2="-8.99991"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.04641" />
                <stop offset="0.287506" stopColor="#2E2E2E" />
                <stop offset="0.544712" stopColor="#676767" />
                <stop offset="0.952065" stopColor="#8B8B8B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          style={{ transform: `translateX(${rightSvgTranslateValue})` }}
          className="fixed overflow-hidden bottom-[0px] z-[10] right-[-5px] h-dvh w-[320px] md:w-[820px] transform transition-ease-in-out duration-80"
        >
          <svg
            className="drop-shadow-[5px_20px_25px_rgba(209,213,219,0.2)]"
            width="916"
            height="809"
            viewBox="0 0 916 809"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_8_2)">
              <path
                d="M912 800.496L912 0.251955L4.98284 0.251952L276.983 390.252L4.98281 800.496L912 800.496Z"
                fill="#D9D9D9"
              />
              <path
                d="M912 800.496L912 0.251955L4.98284 0.251952L276.983 390.252L4.98281 800.496L912 800.496Z"
                fill="black"
                fillOpacity="0.94"
              />
              <path
                d="M912 800.496L912 0.251955L4.98284 0.251952L276.983 390.252L4.98281 800.496L912 800.496Z"
                fill="url(#paint0_linear_8_2)"
                fillOpacity="0.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_8_2"
                x="0.982788"
                y="0.251953"
                width="915.017"
                height="808.244"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_8_2"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_8_2"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_8_2"
                x1="543.483"
                y1="621.752"
                x2="165.962"
                y2="164.748"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.04641" />
                <stop offset="0.287506" stopColor="#2E2E2E" />
                <stop offset="0.459507" stopColor="#676767" />
                <stop offset="0.952065" stopColor="#8B8B8B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className={`absolute overflow-x-hidden top-[0px] z-[${zIndexControl}] min-h-screen w-dvw bg-gradient-to-br from-black to-black flex flex-col items-center justify-start gap-[50px] pt-[80px] pb-[100px] overflow-auto`}
        >
          <div
            className={`h-[600px] mt-[10px] opacity-[0] w-[1400px] bg-white/10 rounded-[20px] flex-shrink-0`}
          ></div>

          <div
            ref={imageRef}
            className="relative h-[750px] w-full inset-0 gap-[20px] md:gap-[0px] overflow-hidden bg-[url('../public/assets/pcbBoard.jpg')] object-cover flex-col md:pl-[70px] bg-cover object-[10%] flex md:items-start pt-[20px] md:pt-[90px] justify-center items-center md:justify-start"
          >
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-black backdrop-blur-[1px]"></div>
            <div
              className={`relative z-[4] text-white md:pl-[0px] text-[63px] text-center md:text-left md:text-[130px] ${iceland.className} font-bold leading-[50px] md:leading-[110px]`}
            >
              KCKM
              <br />
              ELECTRONICS
            </div>
            <p
              className={`md:w-[600px] w-[340px] text-center md:text-left text-[20px] md:text-[23px] text-[white] leading-[40px] ${exo2.className} md:h-[45%] flex items-start pt-[40px] justify-start z-[4]`}
            >
              We’re developing an advanced prototyping lab featuring 3D
              printing, PCB fabrication, and embedded system simulations.
              Through partnerships with experts and institutions, we drive fast
              innovation, intuitive design, and reliable product validation.
            </p>
            <div className="relative flex items-center justify-center md:left-[0px] md:top-[0px] top-[40px] z-[4] h-[50px] ">
              <Button
                zIndex="z-[4]"
                height="h-[50px]"
                width="w-[140px]"
                bgColor="bg-white"
                rounded="rounded-[10px]"
                textSize="text-[22px]"
                textColor="text-black"
                buttonValue="Try Now &#8594;"
                fontFamily={iceland.className}
                letterSpacing="tracking-wide"
                onHover="hover:scale-[110%]"
                isSvgOn={false}
                paddingLeft="pl-[0px]"
              />
            </div>
          </div>

          <div
            className={`h-[600px] w-[1500px] rounded-[20px] flex items-center pt-[0px] justify-start flex-col`}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ y: 50, opacity: 0 }}
              className="h-[100px] w-[350px] md:h-[150px] md:w-[600px] flex items-center justify-center gap-[9px] md:gap-[20px] transition-all"
            >
              <svg
                className="md:h-[58px] h-[40px] md:w-[58px] w-[40px]"
                xmlns="http://www.w3.org/2000/svg"
                // height="58px"
                viewBox="0 -960 960 960"
                // width="58px"
                fill="white"
              >
                <path d="M80-120v-720h400v160h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h320v-400H480v80h80v80h-80v80h80v80h-80v80Zm160-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
              </svg>
              <h1
                className={`md:text-6xl text-[47px] text-white ${inter.className}`}
              >
                Domains
              </h1>
            </motion.div>

            <div className="h-[1400px] md:h-[600px] w-[360px] md:w-[90%] flex flex-wrap md:gap-[0px] gap-[20px] items-start pt-[20px] justify-evenly">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -300, opacity: 0 }}
                className="h-[400px] md:h-[88%] w-[96%] md:w-[25%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 -960 960 960"
                  width="60px"
                  fill="white"
                >
                  <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z" />
                </svg>
                <h1 className={`text-[42px] ${iceland.className} text-white`}>
                  PROTOTYPING
                </h1>
                <p
                  className={`w-[90%] h-[60px] text-[16px] pt-[15px] text-center text-white ${exo2.className}`}
                >
                  Build an internal rapid prototyping lab with 3D printing, PCB
                  fabrication, and embedded system simulations. Enable quick
                  feedback through iterative design with cross-functional
                  collaboration.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 100, opacity: 0 }}
                className="md:h-[88%] h-[400px] md:w-[25%] w-[96%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 -960 960 960"
                  width="60px"
                  fill="white"
                >
                  <path d="M480-600 340-740l140-140 140 140-140 140ZM40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440Z" />
                </svg>
                <h1 className={`text-[42px] ${iceland.className} text-white`}>
                  COLLABORATION
                </h1>
                <p
                  className={`w-[90%] h-[60px] text-[16px] pt-[15px] text-center text-white ${exo2.className}`}
                >
                  Forge collaborations with research labs, universities,
                  startups, and industry leaders to drive innovation and early
                  adoption. A domain-expert advisory council ensures concept
                  validation before major investment.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 300, opacity: 0 }}
                className="h-[400px] md:h-[88%] md:w-[25%] w-[96%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="60px"
                  viewBox="0 -960 960 960"
                  width="60px"
                  fill="white"
                >
                  <path d="M445-80q-29 0-56-12t-45-35L127-403l21-23q14-15 34.5-18.5T221-438l99 53v-365q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v465l-144-77 156 198q10 12 23.76 18 13.76 6 29.24 6h205q38 0 64-26t26-64v-170q0-25.5-17.25-42.75T680-460H460v-60h219.65q50.14 0 85.25 35 35.1 35 35.1 85v170q0 63-43.5 106.5T650-80H445ZM203-665q-11.07-18.75-17.04-40.49-5.96-21.74-5.96-44.76 0-70.75 49.73-120.25Q279.45-920 350-920t120.27 49.74Q520-820.52 520-749.96q0 22.96-5.96 44.62Q508.07-683.68 497-665l-52-30q7-12 11-26t4-29.48Q460-796 427.88-828q-32.12-32-78-32T272-827.92q-32 32.09-32 77.92 0 15 4 29t11 26l-52 30Zm285 335Z" />
                </svg>
                <h1 className={`text-[42px] ${iceland.className} text-white`}>
                  USABILITY
                </h1>
                <p
                  className={`w-[90%] h-[60px] text-[16px] pt-[15px] text-center text-white ${exo2.className}`}
                >
                  Integrate UX/UI experts early in the product design process to
                  ensure intuitive experiences. Run structured beta testing with
                  target users to gather insights, refine usability, and build
                  early traction.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="relative md:top-[0px] top-[720px] h-[810px] md:h-[750px] w-[1350px] rounded-[20px] flex items-center pt-[0px] justify-start flex-col">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ y: 50, opacity: 0 }}
              className="h-[100px] md:h-[150px] w-[60%] flex items-center justify-center gap-[9px] md:gap-[20px]"
            >
              <svg
                className="md:h-[70px] md:w-[70px] h-[42px] w-[42px]"
                xmlns="http://www.w3.org/2000/svg"
                // height="70px"
                viewBox="0 -960 960 960"
                // width="70px"
                fill="#e3e3e3"
              >
                <path d="M480.12-330q70.88 0 120.38-49.62t49.5-120.5q0-70.88-49.62-120.38T479.88-670Q409-670 359.5-620.38T310-499.88q0 70.88 49.62 120.38t120.5 49.5Zm-.36-58q-46.76 0-79.26-32.74-32.5-32.73-32.5-79.5 0-46.76 32.74-79.26 32.73-32.5 79.5-32.5 46.76 0 79.26 32.74 32.5 32.73 32.5 79.5 0 46.76-32.74 79.26-32.73 32.5-79.5 32.5Zm.24 188q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.17 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.33-174.5Q601.34-740 480.17-740T257.5-674.5Q156-609 102-500q54 109 155.33 174.5Q358.66-260 479.83-260Z" />
              </svg>
              <h1
                className={`md:text-6xl text-[38px]  text-white ${inter.className}`}
              >
                Mission & Vision
              </h1>
            </motion.div>
            <div className="h-[78%] md:h-[90%] w-[400px] md:w-full rounded-[15px] flex items-center justify-evenly flex-col flex-wrap">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[60px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  stroke="#e3e3e3"
                  strokeWidth="40"
                  className="flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>Straightforward & Visionary</p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[60px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  stroke="#e3e3e3"
                  strokeWidth="40"
                  className="flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>Innovation-Focused</p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[60px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  stroke="#e3e3e3"
                  strokeWidth="40"
                  className="flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>Market & User-Oriented</p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[60px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  stroke="#e3e3e3"
                  strokeWidth="40"
                  className="flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>Future-Driven & Impactful</p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`md:h-[80px] h-[145px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  stroke="#e3e3e3"
                  strokeWidth="40"
                  className="flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>
                  Be the global leader in next-generation electronic innovation,
                  shaping smarter & more connected world
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`md:h-[80px] h-[150px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  stroke="#e3e3e3"
                  strokeWidth="40"
                  className="flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>
                  Redefine the future through pioneering electronic technologies
                  that anticipate needs before they arise
                </p>
              </motion.div>
            </div>
          </div>
          <div className="relative top-[620px] md:top-[0px] h-[700px] w-[1450px] rounded-[20px] flex items-center pt-[0px] gap-[15px] justify-start flex-col">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ y: 50, opacity: 0 }}
              className="h-[70px] md:h-[120px] w-[600px] flex items-center justify-center gap-[13px] md:gap-[20px]"
            >
              <svg
                className="md:h-[60px] h-[45px] md:w-[60px] w-[45px]"
                xmlns="http://www.w3.org/2000/svg"
                // height="60px"
                viewBox="0 -900 960 960"
                // width="60px"
                fill="white"
              >
                <path d="M480-394Zm-153-51 75 50 78-39 77 40 75-50-47-96H374l-47 95ZM177-140h606L659-390l-97 65-82-41-82 40-98-65-123 251ZM80-80l240-487q8-15 22.47-24 14.47-9 31.53-9h76v-280h254l-35 70 35 70H510v140h73q16.93 0 30.92 9 13.98 9 22.08 24L880-80H80Z" />
              </svg>
              <h1
                className={`md:text-6xl text-[38px] text-white ${inter.className}`}
              >
                Achievements
              </h1>
            </motion.div>
            <div className="h-[1200px] md:h-[73%] w-[380px] md:w-[1150px] flex items-center justify-center rounded-[10px] gap-[50px] flex-col md:flex-row p-[10px]">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -300, opacity: 0 }}
                className="h-[35%] md:h-full w-[350px] md:w-[35%] flex items-center justify-center flex-col"
              >
                <div className="relative hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:blur-[0px] cursor-pointer transition-all duration-200 hover:scale-[105%] blur-[0px] h-full w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={IMC}
                    fill
                    alt="Photo"
                    className="object-cover blur-[1px] object-[30%_center] rounded-[10px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent z-[2] rounded-[10px]" />
                  <h1
                    className={`absolute bottom-4 left-1/2  -translate-x-1/2 z-[6] text-[30px] md:text-[42px] text-white ${iceland.className} text-center w-[90%]`}
                  >
                    INCLUSION AT IMC-24
                  </h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: -100, opacity: 0 }}
                className="h-[35%] md:h-full w-[350px] md:w-[35%] flex items-center justify-center flex-col"
              >
                <div className="relative hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:blur-[0px] cursor-pointer transition-all duration-200 hover:scale-[105%] blur-[0px] h-full w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={IIT}
                    fill
                    alt="Photo"
                    className="object-cover blur-[1px] object-[70%_center] rounded-[10px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] rounded-[10px]" />
                  <h1
                    className={`absolute bottom-4 left-1/2  -translate-x-1/2 z-[6] text-[30px] md:text-[42px] text-white ${iceland.className} text-center w-[90%]`}
                  >
                    INCLUSION AT IIT KANPUR ABHIVYAKTI-25
                  </h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 300, opacity: 0 }}
                className="h-[35%] md:h-full w-[350px] md:w-[35%] flex items-center justify-center flex-col"
              >
                <div className="relative hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:blur-[0px] cursor-pointer transition-all duration-200 hover:scale-[105%] blur-[0px] h-full w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={Jamoo}
                    fill
                    alt="Photo"
                    className="object-cover blur-[1px] object-[48%_center] rounded-[10px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[2] rounded-[10px]" />
                  <h1
                    className={`absolute bottom-4 left-1/2  -translate-x-1/2 z-[6] text-[30px] md:text-[42px] text-white ${iceland.className} text-center w-[90%]`}
                  >
                    SMART STREET LIGHT JAMOO
                  </h1>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative md:top-[40px] top-[710px] h-[400px] md:h-[250px] w-full border-t-2 border-white/20 flex items-center pt-[0px] justify-start flex-col">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}
