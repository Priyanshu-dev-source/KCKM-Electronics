"use client";

import React, { useEffect } from "react";
import { Store, Cpu, CircuitBoard,  HeartPulse, Workflow, BookMarked, Focus } from "lucide-react";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import ProductLayout from "../components/productsLayout.jsx";
import Footer from "../components/footer.jsx"
import { motion } from "motion/react";

import { Exo_2, Inter } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], weight: "300" });
const inter = Inter({ subsets: ["latin"], weight: "700" });

const Products = () => {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);

  return (
    <>
      <div className="relative w-full bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
        <div className="fixed top-[0px] h-[60px] w-dvw backdrop-blur-[5px] z-[4]">
          <MobileNavbar />
        </div>

        <div className="fixed hidden md:flex justify-center items-center h-[50px] w-[520px] bottom-[20px] left-1/2 -translate-x-1/2 z-50">
          <Navbar />
        </div>

        <div className={`flex flex-col items-center pt-[45px] pb-[100px] gap-[2px] md:gap-10 w-full ${inter.className}`}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative top-[0px] md:top-[-25px] h-[150px] z-[3] w-full flex items-center justify-center md:gap-[10px] gap-[3px]"
          >
            <svg
              className="md:h-[62px] md:w-[62px] h-[48px] w-[48px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="white"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
            </svg>
            <h1 className="text-[45px] md:text-6xl font-bold">Our Products</h1>
          </motion.div>

          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <div className="container relative md:bottom-[50px] mx-auto px-2 py-2">
              <div className="space-y-24">
                <ProductLayout
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  id="1"
                  name="CNC Laser Printer"
                  description="A compact and powerful tool designed for precision work, the CNC Laser Printer combines high-speed engraving with clean, accurate cuts. Ideal for detailed patterns on wood, acrylic, leather, and more, it’s perfect for makers, designers, and hobbyists looking to bring their creative ideas to life with professional-grade results."
                  features={[
                    "High-precision laser engraving",
                    "Compatible with wood, acrylic, leather & more",
                    "Adjustable laser power for detailed work",
                    "User-friendly software interface",
                    "Durable aluminum frame with compact design",
                  ]}
                  imageUrl="/assets/product.png"
                  videoUrl="/assets/product1.mp4"
                />

                <ProductLayout
                  id="2"
                  name="Wireless Home Control System"
                  description="A smart, intuitive solution for modern living, the Wireless Home Control System lets you manage lighting, appliances, and security with ease. Seamlessly integrated with your smartphone, it offers convenience, energy savings, and peace of mind—all from the palm of your hand."
                  features={[
                    "Remote control via smartphone app",
                    "Supports lighting, appliances & security",
                    "Real-time status monitoring",
                    "Easy Wi-Fi setup with voice assistant support",
                    "Energy-efficient and customizable settings",
                  ]}
                  imageUrl="/assets/product2.png"
                  videoUrl="/assets/product2.mp4"
                />
              </div>
            </div>
          </div>


          <div className="relative md:top-[0px] top-[40px] h-[730px] md:h-[750px] w-[1350px] rounded-[20px] flex items-center pt-[0px] justify-start flex-col">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ y: 50, opacity: 0 }}
              className="h-[100px] md:h-[150px] w-[60%] flex items-center justify-center gap-[9px] md:gap-[20px]"
            >
              <Focus className="md:h-[70px] md:w-[70px] h-[42px] w-[42px]" />
              <h1
                className={`md:text-6xl text-[32px] text-black dark:text-white ${inter.className}`}
              >
                Focused Marketing
              </h1>
            </motion.div>
            <div className="h-[78%] md:h-[90%] w-[400px] md:w-full rounded-[15px] flex items-center justify-evenly flex-col flex-wrap">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -100, opacity: 0 }}
                className={`h-[60px] md:h-[80px] w-[90%] rounded-[15px] bg-zinc-300 dark:bg-white/10 text-black dark:text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(0,0,0,1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  // stroke="#e3e3e3"
                  strokeWidth="40"
                  className="dark:stroke-white stroke-black flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>We operate on B2B model
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[80px] md:h-[80px] w-[90%] rounded-[15px] bg-zinc-300 dark:bg-white/10 text-black dark:text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(0,0,0,1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  // stroke="#e3e3e3"
                  strokeWidth="40"
                  className="dark:stroke-white stroke-black flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>Custom electronic design and manufacturing solutions
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[100px] md:h-[80px] w-[90%] rounded-[15px] bg-zinc-300 dark:bg-white/10 text-black dark:text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(0,0,0,1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  // stroke="#e3e3e3"
                  strokeWidth="40"
                  className="dark:stroke-white stroke-black flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>High-quality electronic components tailored to business needs
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[110px] md:h-[80px] w-[90%] rounded-[15px] bg-zinc-300 dark:bg-white/10 text-black dark:text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(0,0,0,1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  // stroke="#e3e3e3"
                  strokeWidth="40"
                  className="dark:stroke-white stroke-black flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>End-to-end support: from prototyping to mass production
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`md:h-[80px] h-[105px] w-[90%] rounded-[15px] bg-zinc-300 dark:bg-white/10 text-black dark:text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(0,0,0,1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="none"
                  // stroke="#e3e3e3"
                  strokeWidth="40"
                  className="dark:stroke-white stroke-black flex-shrink-0"
                >
                  <path d="M306.84-700.82 424-853q11-14 25.59-21 14.58-7 30.5-7 15.91 0 30.41 7t25.5 21l117.16 152.18L831-641q23 8 36 27.11t13 42.22q0 10.67-3.03 21.3-3.04 10.63-9.97 20.37L753-367l4 173q0 31-21 52.5T685.82-120q-1.82 0-18.82-3l-187-52-186.78 51.92Q288-121 282.49-120.5q-5.51.5-10.1.5-29.39 0-49.89-21.69Q202-163.37 203-195l4-173.25L93-531q-6.93-9.83-9.97-20.55Q80-562.28 80-573q0-23 12.92-41.61Q105.84-633.21 129-641l177.84-59.82ZM343-649l-209 70 134 194-5 207 217-60 217 61-5-208 134-192-209-72-137-178-137 178Zm137 147Z" />
                </svg>
                <p>
                Scalable, flexible, and reliable production capabilities

                </p>
              </motion.div>
            </div>
          </div>
          <div
            className={`relative top-[50px] h-[600px] w-[1500px] rounded-[20px] gap-[20px] flex items-center pt-[0px] justify-start flex-col`}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ y: 50, opacity: 0 }}
              className="h-[100px] w-[350px] md:h-[150px] md:w-[600px] flex items-center justify-center gap-[9px] md:gap-[20px] transition-all"
            >
              <Store className="md:h-[60px] h-[40px] md:w-[60px] w-[40px]" />
              <h1
                className={`md:text-6xl text-[38px] text-black dark:text-white ${inter.className}`}
              >
                Target Market
              </h1>
            </motion.div>

            <div className="h-[1400px] md:h-[600px] w-[360px] md:w-[90%] flex flex-wrap md:gap-[0px] gap-[20px] items-start pt-[20px] justify-evenly">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 200, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-zinc-300 dark:bg-white/10 cursor-pointer hover:scale-[106%] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,0,0,1)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <Cpu className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[27px] text-center text-black dark:text-white ${exo2.className}`}
                >
                  Tech Startups & Innovators.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 200, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-zinc-300 dark:bg-white/10 cursor-pointer hover:scale-[106%] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,0,0,1)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <CircuitBoard className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[27px] text-center text-black dark:text-white ${exo2.className}`}
                >
                  Consumer Electronics Brands.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 200, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-zinc-300 dark:bg-white/10 cursor-pointer hover:scale-[106%] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,0,0,1)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <HeartPulse className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[15px] text-center text-black dark:text-white ${exo2.className}`}
                >
                  Healthcare & MedTech Companies.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 200, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-zinc-300 dark:bg-white/10 cursor-pointer hover:scale-[106%] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,0,0,1)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <Workflow className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[12px] text-center text-black dark:text-white ${exo2.className}`}
                >
                  Industrial Automation & Smart Systems.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 200, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-zinc-300 dark:bg-white/10 cursor-pointer hover:scale-[106%] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,0,0,1)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <BookMarked className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[12px] text-center text-black dark:text-white ${exo2.className}`}
                >
                  Educational & Research Institutions
                </p>
              </motion.div>
            </div>
          </div>
          <div className="relative md:top-[30px] top-[1050px] h-[400px] md:h-[250px] w-full border-t-2 border-black dark:border-white/20 flex items-center pt-[0px] justify-start flex-col">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
