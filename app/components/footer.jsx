import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Exo_2, Inter } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], weight: "300" });
const inter = Inter({ subsets: ["latin"], weight: "700" });

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
