"use client";

import React, { useEffect } from "react";
import { Store, Cpu, CircuitBoard,  HeartPulse, Workflow, BookMarked, Focus } from "lucide-react";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import ProductLayout from "../components/productsLayout.jsx";
import Link from "next/link";
import { motion } from "motion/react";

import { Exo_2, Iceland, Inter } from "next/font/google";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });
const exo2 = Exo_2({ subsets: ["latin"], weight: "300" });
const inter = Inter({ subsets: ["latin"], weight: "700" });

const Products = () => {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);

  return (
    <>
      <div className="relative w-full bg-black text-white overflow-x-hidden">
        <div className="fixed top-[0px] h-[70px] w-dvw backdrop-blur-[5px] z-[4]">
          <MobileNavbar />
        </div>

        <div className="fixed hidden md:flex justify-center items-center h-[50px] w-[520px] top-[10px] left-1/2 -translate-x-1/2 z-50">
          <Navbar />
        </div>

        <div
          className={`flex flex-col items-center pt-[45px] pb-[100px] gap-[2px] md:gap-10 w-full ${inter.className}`}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative top-[25px] h-[150px] z-[3] w-full flex items-center justify-center md:gap-[10px] gap-[3px]"
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

          <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-2 py-2">
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
                  price={149.99}
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
                className={`md:text-6xl text-[32px]  text-white ${inter.className}`}
              >
                Focused Marketing
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
                <p>We operate on B2B model
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[80px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
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
                <p>Custom electronic design and manufacturing solutions
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[100px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
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
                <p>High-quality electronic components tailored to business needs
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`h-[110px] md:h-[80px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
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
                <p>End-to-end support: from prototyping to mass production
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -200, opacity: 0 }}
                className={`md:h-[80px] h-[105px] w-[90%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
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
                className={`md:text-6xl text-[38px] text-white ${inter.className}`}
              >
                Target Market
              </h1>
            </motion.div>

            <div className="h-[1400px] md:h-[600px] w-[360px] md:w-[90%] flex flex-wrap md:gap-[0px] gap-[20px] items-start pt-[20px] justify-evenly">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 100, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <Cpu className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[27px] text-center text-white ${exo2.className}`}
                >
                  Tech Startups & Innovators.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 100, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <CircuitBoard className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[27px] text-center text-white ${exo2.className}`}
                >
                  Consumer Electronics Brands.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 100, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <HeartPulse className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[15px] text-center text-white ${exo2.className}`}
                >
                  Healthcare & MedTech Companies.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 100, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <Workflow className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[12px] text-center text-white ${exo2.className}`}
                >
                  Industrial Automation & Smart Systems.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ y: 100, opacity: 0 }}
                className="h-[250px] md:h-[67%] w-[96%] md:w-[17%] bg-white/10 cursor-pointer hover:scale-[106%] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200 rounded-[20px] flex items-center justify-start px-[30px] py-[20px] gap-[15px] flex-col"
              >
                <BookMarked className="relative top-[10px] h-[60px] w-[60px]" />
                <p
                  className={`w-[90%] h-[40px] text-[28px] pt-[12px] text-center text-white ${exo2.className}`}
                >
                  Educational & Research Institutions
                </p>
              </motion.div>
            </div>
          </div>
          <div className="relative md:top-[90px] top-[970px] h-[400px] md:h-[250px] w-full border-t-2 border-white/20 flex items-center pt-[0px] justify-start flex-col">
            <div className="relative bottom-[40px] h-[80px] w-[290px] md:w-164 bg-black flex items-center justify-evenly">
              <Link
                href="https://www.linkedin.com/in/priyanshu-kumar-04ba7a300/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.svg
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="hover:stroke-blue-500 hover:scale-[115%] transition duration-200 md:h-[32px] h-[26px] md:w-[32px] w-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  // height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </motion.svg>
              </Link>
              <Link
                href="https://www.instagram.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.svg
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="hover:stroke-purple-500 hover:scale-[115%] transition duration-200 md:h-[32px] h-[26px] md:w-[32px] w-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  // height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
                  <path d="M16 11.37a4 4 0 1 1-7.9 1.26A4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </motion.svg>
              </Link>
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.svg
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="hover:stroke-blue-300 hover:scale-[115%] transition duration-200 md:h-[32px] h-[26px] md:w-[32px] w-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  // height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </motion.svg>
              </Link>

              {/* Twitter */}
              <Link
                href="https://twitter.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.svg
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="hover:stroke-blue-400 hover:scale-[115%] transition duration-200 md:h-[32px] h-[26px] md:w-[32px] w-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  // height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 3a4.48 4.48 0 0 0-4.39 5.5A12.94 12.94 0 0 1 3 4s-4 9 5 13a13.06 13.06 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </motion.svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.svg
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="hover:stroke-red-500 hover:scale-[115%] transition duration-200 md:h-[32px] h-[26px] md:w-[32px] w-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  // height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.5C18.93 4 12 4 12 4s-6.93 0-8.6.5a2.78 2.78 0 0 0-1.94 1.92A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.92c1.67.5 8.6.5 8.6.5s6.93 0 8.6-.5a2.78 2.78 0 0 0 1.94-1.92A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </motion.svg>
              </Link>

              {/* Website */}
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <motion.svg
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="hover:stroke-green-500 hover:scale-[115%] transition duration-200 md:h-[32px] h-[26px] md:w-[32px] w-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  // height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18c-1.93 0-3.68-.78-4.95-2.05a7 7 0 0 1 9.9 0A6.94 6.94 0 0 1 12 20Zm4.24-4.24a9.93 9.93 0 0 0-8.48 0A7 7 0 0 1 5 12a7 7 0 0 1 14 0 6.94 6.94 0 0 1-2.76 3.76Z" />
                </motion.svg>
              </Link>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ y: 50, opacity: 0 }}
              className={`relative bottom-[40px] md:bottom-[40px] h-[100px] w-[500px] text-[33px] md:text-[40px] text-white tracking-wide flex items-center justify-center ${inter.className}`}
            >
              KCKM Electronics
            </motion.div>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ y: 50, opacity: 0 }}
              className={`relative bottom-[50px] md:bottom-[50px] h-[50px] w-[500px] text-[13px] md:text-[15px]  text-white/80 tracking-wide flex items-start justify-center ${exo2.className}`}
            >
              {" "}
              Copyright &nbsp;&copy;&nbsp;2025 KCKM Electronics, Inc.
            </motion.p>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ y: -250, opacity: 0 }}
              className={`relative bottom-[60px] md:bottom-[40px] h-[200px] md:h-[40px] w-[550px] md:flex-row flex-col flex items-center justify-evenly ${exo2.className} text-white/60 text-[17px]`}
            >
              <Link
                className="group hover:text-white tracking-wider transition-all duration-200 flex items-center justify-center gap-[1px] flex-col"
                href="/"
              >
                Home
                <span className="w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                className="group hover:text-white tracking-wider transition-all duration-200 flex items-center justify-center gap-[1px] flex-col"
                href="/products"
              >
                Products
                <span className="w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                className="group hover:text-white tracking-wider transition-all duration-200 flex items-center justify-center gap-[1px] flex-col"
                href="/projects"
              >
                Projects
                <span className="w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                className="group hover:text-white tracking-wider transition-all duration-200 flex items-center justify-center gap-[1px] flex-col"
                href="/team"
              >
                Team
                <span className="w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                className="group hover:text-white tracking-wider transition-all duration-200 flex items-center justify-center gap-[1px] flex-col"
                href="/contactUs"
              >
                Contact Us
                <span className="w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
