// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion } from "motion/react";
// import { Play, Pause, KeyRound, ChevronRight } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Exo_2, Iceland, Inter } from "next/font/google";

// const iceland = Iceland({
//   subsets: ["latin"],
//   weight: "400",
// });

// const exo2 = Exo_2({
//   subsets: ["latin"],
//   weight: "300",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   weight: "700",
// });

// export default function ProductDisplay({
//   id,
//   name,
//   description,
//   features,
//   imageUrl,
//   videoUrl,
// }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [activeTab, setActiveTab] = useState("photo");

//   // const handleVideoPlay = () => {
//   //   const video = document.getElementById(`product-video-${id}`);
//   //   if (isPlaying) {
//   //     video.pause();
//   //   } else {
//   //     video.play();
//   //   }
//   //   setIsPlaying(!isPlaying);
//   // };

//   const handleVideoPlay = () => {
//     const video = document.getElementById(`product-video-${id}`);
//     if (!video) return;

//     if (isPlaying) {
//       video.pause();
//       setIsPlaying(false);
//     } else {
//       const playPromise = video.play();
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => setIsPlaying(true))
//           .catch((error) => {
//             console.error("Play error:", error);
//           });
//       }
//     }
//   };

//   return (
//     <motion.div
//       initial={{ x: -200, opacity: 0 }}
//       whileInView={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.3 }}
//       className="grid md:grid-cols-2 gap-[40px] items-start"
//     >
//       {/* Media Section */}
//       <div className="space-y-4">
//         <Tabs
//           defaultValue="photo"
//           className="w-full"
//           onValueChange={setActiveTab}
//         >
//           <TabsList className="grid grid-cols-2 w-full h-[50px] bg-zinc-300">
//             <TabsTrigger className="text-[19px] cursor-pointer" value="photo">
//               Photo
//             </TabsTrigger>
//             <TabsTrigger className="text-[19px] cursor-pointer" value="video">
//               Video
//             </TabsTrigger>
//           </TabsList>
//           <TabsContent value="photo" className="mt-4">
//             <div className="relative opacity-[0.9] h-[550px] bg-gray-300 rounded-lg overflow-hidden">
//               <Image
//                 src={imageUrl || "/placeholder.svg"}
//                 alt={name}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </TabsContent>
//           <TabsContent value="video" className="mt-4 opacity-[0.9]">
//             <div className="relative h-[500px] bg-black rounded-lg overflow-hidden">
//               <video
//                 id={`product-video-${id}`}
//                 className="w-full h-full object-cover"
//                 width="420"
//                 height="240"
//                 controls
//                 preload="none"
//                 loop
//                 muted
//                 onPlay={() => setIsPlaying(true)}
//                 onPause={() => setIsPlaying(false)}
//               >
//                 <source src={videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               {activeTab === "video" && (
//                 <button
//                   onClick={handleVideoPlay}
//                   className="absolute inset-0 flex items-center justify-center hover:bg-opacity-20 transition-all"
//                 >
//                   {isPlaying ? (
//                     <Pause className="w-16 h-16 text-white" />
//                   ) : (
//                     <Play className="w-16 h-16 text-white" />
//                   )}
//                 </button>
//               )}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>

//       {/* Product Details */}
//       <div className="space-y-30 w-[680px]">
//         <div>
//           <h2 className="relative bottom-[20px] text-[60px] font-bold">
//             {name}
//           </h2>
//         </div>

//         <p
//           className={`relative bottom-[120px] text-white/60 text-[18px] w-[550px] text-left ${inter.className} leading-relaxed`}
//         >
//           {description}
//         </p>

//         <div>
//           <h3 className="relative flex flex-row bottom-[200px] w-[360px] items-center justify-between text-[48px] font-semibold ">
//             Key Features
//           </h3>
//           <ul className="relative bottom-[175px] space-y-2">
//             {features.map((feature, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="inline-block h-[20px] text-[25px] bg-black rounded-full mt-2"></span>
//                 <span className="text-[18px] flex items-center justify-start text-white/60">
//                   <ChevronRight className="h-[25px] w-[25px]" />
//                   {feature}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Exo_2, Iceland, Inter } from "next/font/google";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });
const exo2 = Exo_2({ subsets: ["latin"], weight: "300" });
const inter = Inter({ subsets: ["latin"], weight: "700" });

export default function ProductDisplay({ id, name, description, features, imageUrl, videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("photo");

  const handleVideoPlay = () => {
    const video = document.getElementById(`product-video-${id}`);
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Play error:", error));
      }
    }
  };

  return (
    <motion.div
      initial={{ x: -90, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start w-full px-4 md:px-8"
    >
      {/* Media Section */}
      <div className="space-y-4 w-full">
        <Tabs defaultValue="photo" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full h-[50px] bg-zinc-300 rounded-md">
            <TabsTrigger className="text-[17px] sm:text-[19px] cursor-pointer" value="photo">
              Photo
            </TabsTrigger>
            <TabsTrigger className="text-[17px] sm:text-[19px] cursor-pointer" value="video">
              Video
            </TabsTrigger>
          </TabsList>
          <TabsContent value="photo" className="mt-4">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </TabsContent>
          <TabsContent value="video" className="mt-4">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-black rounded-lg overflow-hidden">
              <video
                id={`product-video-${id}`}
                className="w-full h-full object-cover"
                width="420"
                height="240"
                controls
                preload="none"
                loop
                muted
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {activeTab === "video" && (
                <button
                  onClick={handleVideoPlay}
                  className="absolute inset-0 flex items-center justify-center hover:bg-opacity-20 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-12 h-12 text-white sm:w-16 sm:h-16" />
                  ) : (
                    <Play className="w-12 h-12 text-white sm:w-16 sm:h-16" />
                  )}
                </button>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Product Details */}
      <div className="relative bottom-[15px] space-y-6 w-full">
        <h2 className="text-[45px] sm:text-[48px] md:text-[60px] font-bold leading-tight">{name}</h2>

        <p
          className={`text-white/60 text-[16px] sm:text-[18px] max-w-full sm:max-w-[550px] ${inter.className} leading-relaxed`}
        >
          {description}
        </p>

        <div>
          <h3 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold mb-4">Key Features</h3>
          <ul className="relative right-[20px] space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="inline-block w-2 h-2 mt-2 bg-black rounded-full"></span>
                <span className="text-[16px] sm:text-[18px] text-white/60 flex items-center">
                  <ChevronRight className="h-5 w-5 mr-1" />
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

