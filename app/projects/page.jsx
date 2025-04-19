"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  HandPlatter,
  Cpu,
  Microchip,
  Zap,
  Factory,
  Blocks,
  FolderOpenDot,
  Globe,
} from "lucide-react";
import MobileNavbar from "../components/mobileNavbar.jsx";
import Navbar from "../components/navbar.jsx";
import ProductLayout from "../components/productsLayout.jsx";
import Footer from "../components/footer.jsx"
import { Exo_2, Inter } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], weight: "300" });
const inter = Inter({ subsets: ["latin"], weight: "700" });

const iconMap = {
  Cpu,
  HandPlatter,
  Microchip,
  Zap,
  Factory,
  Blocks,
};

const Projects = () => {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);

  const serviceFeaturesAndScaleUpPoints = [
    {
      aim: "Expand production capabilities to meet growing market demand.",
      svgs: ["Microchip"],
      descp: "Custom Electronic Product Development",
    },
    {
      aim: "Establish strategic partnerships for distribution and growth.",
      svgs: ["Zap"],
      descp: "Rapid Prototyping & Testing",
    },
    {
      aim: "Penetrate international markets with competitive, high-quality solutions.",
      svgs: ["Factory"],
      descp: "Advanced Manufacturing Solutions",
    },
    {
      aim: "Continuously evolve with cutting-edge R&D and emerging technologies.",
      svgs: ["Blocks"],
      descp: "Next-Gen Technology Integration",
    },
    {
      aim: "Build a strong brand known for futuristic and user-centric electronics.",
      svgs: ["Cpu"],
      descp: "Technology Consulting & Co-Innovation",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 w-full h-[60px] backdrop-blur-md z-[4]">
        <MobileNavbar />
      </div>

      <div className="fixed hidden md:flex justify-center items-center h-[50px] w-[520px] bottom-5 left-1/2 -translate-x-1/2 z-[10]">
        <Navbar />
      </div>

      <div className="relative top-[60px] md:gap-[50px] flex flex-col items-center px-2 sm:px-6 md:px-0 pt-6 md:pt-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center mb-10"
        >
          <HandPlatter className="h-12 w-12 md:h-14 md:w-14" />
          <h1 className={`text-4xl md:text-6xl ${inter.className}`}>
            Services and Markets
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:pl-[0px] pl-[25px] md:w-full max-w-[1400px]">
          {serviceFeaturesAndScaleUpPoints.map((points, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 rounded-2xl h-[300px] md:w-full w-[91%] p-4 pt-[40px] flex flex-col items-center text-center gap-[30px] cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-200"
            >
              {points.svgs.map((iconName, i) => {
                const Icon = iconMap[iconName] || HandPlatter;
                return <Icon key={i} className="w-16 h-16 text-white mb-4" />;
              })}
              <p className={`text-3xl md:text-2xl ${exo2.className}`}>
                {points.descp}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`relative top-[110px] md:top-[120px] h-[150px] z-[3] w-full flex items-center justify-center md:gap-[25px] gap-[3px] ${inter.className} `}
        >
          <FolderOpenDot className="md:h-[62px] md:w-[62px] h-[48px] w-[48px]" />
          <h1 className="text-[45px] md:text-6xl font-bold">Our Projects</h1>
        </motion.div>

        <div className={`min-h-screen bg-black text-white ${inter.className}`}>
          <div className="container relative bottom-[0px] md:bottom-[-20px] mx-auto py-28">
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
                imageUrl="/assets/projectImg1.png"
                videoUrl="/assets/project1.mp4"
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
                imageUrl="/assets/projectImg2.png"
                videoUrl="/assets/project2.mp4"
              />
            </div>
          </div>
        </div>

        <div className="relative md:top-[20px] top-[-50px] h-[730px] md:h-[750px] w-full rounded-[20px] flex items-center pt-[0px] justify-start flex-col">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ y: 50, opacity: 0 }}
            className="h-[100px] md:h-[150px] w-[90%] md:w-[60%] flex items-center justify-center gap-[9px] md:gap-[20px]"
          >
            <Globe className="md:h-[70px] md:w-[70px] h-[42px] w-[42px]" />
            <h1
              className={`md:text-6xl text-[32px] text-white ${inter.className}`}
            >
              Focused Marketing
            </h1>
          </motion.div>
          <div className="h-[92%] md:h-[90%] w- md:w-full rounded-[15px] flex items-center justify-evenly flex-col flex-wrap">
            {serviceFeaturesAndScaleUpPoints.map((points, index) => (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -100, opacity: 0 }}
                className={`h-[110px] md:h-[80px] w-[90%] md:w-[80%] rounded-[15px] bg-white/10 text-white text-[20px] md:text-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[104%] transition-all duration-150 cursor-pointer ${exo2.className} flex items-center gap-4 px-6`}
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
                <p>{points.aim}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative md:top-[120px] top-[50px] h-[450px] md:h-[350px] w-full border-t-2 border-white/20 flex items-center pt-[0px] justify-start flex-col">
          <Footer />
        </div>
      {/* </div> */}
    </div>
  );
};

export default Projects;
