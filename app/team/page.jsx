"use client";

import React, { useEffect } from "react";
import { Users, CircleUserRound  } from "lucide-react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar.jsx";
import Footer from "../components/footer.jsx";
import Image from "next/image";

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
  useEffect(() => {
    document.body.style.overflowY = "auto";
  }, []);

  const membersDetails = [
    {
      name: "Dr. Manish Kumar",
      memberPost: "Founder",
      memberInfo: "Visionary & Innovator",
      linkedin: "https://www.linkedin.com/in/manish-kumar-2368581a/",
      github: "",
      image: "/assets/manish.jpg",
    },
    {
      name: "Mr. Sandeep Khare",
      memberPost: "Innovator",
      memberInfo: "Encourager & Charming",
      linkedin: "https://www.linkedin.com/in/sandeep-kumar-khare-26993516b/",
      github: "",
      image: "/assets/sandeep.jpg",
    },
    {
      name: "Priyanshu Kumar",
      memberPost: "Developer",
      memberInfo: "Designer & Optimist",
      linkedin: "https://www.linkedin.com/in/priyanshu-kumar-04ba7a300/",
      github: "https://github.com/Priyanshu-dev-source",
      image: "/assets/Priyanshu.jpg",
    },
    
  ];

  return (
    <>
      <div className="relative w-full bg-black text-white overflow-x-hidden">
        <div className="fixed top-[0px] h-[70px] w-dvw backdrop-blur-[5px] z-[4]">
          <MobileNavbar />
        </div>
        <div
          className={`fixed hidden md:flex justify-center items-center h-[50px] w-[520px] bottom-[20px] left-[500px] z-[7]`}
        >
          <Navbar />
        </div>

        <div
          className={`flex flex-col items-center pt-0 pb-24 gap-2 md:gap-10 w-full ${inter.className}`}
        >
          <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden rounded-[20px]">
            <Image
              src="/assets/meeting.png"
              alt="Meeting Background"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="flex items-center justify-center gap-4 md:gap-[30px] text-[40px] md:text-[100px] font-bold text-white">
                <Users className="w-10 h-10 md:w-[80px] md:h-[80px]" />
                Meet Our Team
              </h1>
              <p className="mt-14 max-w-4xl text-white text-base md:text-[20px] leading-[30px] md:leading-[35px] tracking-wide">
                We’re more than just a team—we’re a close-knit family united by
                passion, purpose, and a shared vision. Each member brings a
                unique set of skills, experiences, and perspectives that fuel
                our creativity and innovation. Together, we collaborate, grow,
                and support one another to bring ambitious ideas to life. Now,
                let’s introduce you to the incredible individuals who make it
                all happen behind the scenes.
              </p>
            </div>
          </div>
            <div className={`text-white text-[40px] md:text-[60px] ${inter.className} h-[100px] w-full flex items-center gap-[15px] md:gap-[30px] justify-center`}>
                <CircleUserRound
                  className="md:h-[70px] md:w-[70px] h-[45px] w-[45px]"
                />
                Team Member
            </div>

          <div className="flex flex-col justify-center md:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full items-center px-[30px] md:px-[70px] gap-[70px]">

            {membersDetails.map((member, index) => (
              <motion.div
                initial={{x: 120, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.3}}
                key={index}
                className="h-[580px] hover:scale-[107%] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] duration-200 cursor-pointer w-[350px] md:w-[400px] border-2 border-white bg-white/10 rounded-[20px] flex flex-col overflow-hidden relative"
              >
                <div className="relative h-[68%] w-full border-b-2 border-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover opacity-90 object-[center_10%]"
                  />
                </div>


                {(member.linkedin || member.github) && (
                  <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-[50px] z-10">
                    <div className="h-[60px] w-auto px-4 rounded-[10px] backdrop-blur-[4px] border-white border flex items-center justify-center gap-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="text-white text-[24px] hover:fill-blue-500 h-[40px] w-[40px] hover:scale-110 transition" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-white text-[24px] h-[40px] hover:fill-black w-[40px] hover:scale-110 transition" />
                        </a>
                      )}
                    </div>
                  </div>
                )}


                <div className="h-[33%] w-full rounded-b-[20px] flex items-start justify-start pl-[20px] gap-[8px] pt-[45px] flex-col">
                  <span className="text-white text-[30px]">{member.name}</span>
                  <span className="text-white text-2xl">
                    {member.memberPost}
                  </span>
                  <span className="text-white/40 text-[17px]">
                    {member.memberInfo}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        <div className="relative md:top-[0px] top-[120px] h-[400px] md:h-[330px] w-full border-t-2 border-white/20 flex items-center pt-[0px] justify-start flex-col">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
