// "use client";

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/navbar";
// import emailjs from "@emailjs/browser";
// import MobileNavbar from "../components/mobileNavbar.jsx";
// import Footer from "../components/footer.jsx";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Clock, Send, Headset } from "lucide-react";
// import { ToastContainer, toast, Bounce } from "react-toastify";
// import { Exo_2, Iceland, Inter } from "next/font/google";
// import dynamic from "next/dynamic";

// const MapComponent = dynamic(() => import("../components/mapContainer.jsx"), {
//   ssr: false,
// });

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

// const Products = () => {
//   useEffect(() => {
//     document.body.style.overflowY = "auto";
//     emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     emailjs
//       .send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,        
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         }  
//       )
//       .then(
//         () => {
//           toast.success("Thanks for Contacting Us... We will get to you soon.", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//             transition: Bounce,
//           });
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("EmailJS error:", error);
//           toast.error("Failed to send message. Please try again later.");
//         }
//       );
//   };
  

//   const [latLng, setLatLng] = useState({
//     lat: 26.449530871109715,
//     lng: 80.19259172671372,
//   });

//   return (
//     <>
//       <div className="relative w-full bg-black text-white overflow-x-hidden">
//         <ToastContainer />
//         <div className="fixed top-[0px] h-[60px] w-dvw backdrop-blur-[5px] z-[4]">
//           <MobileNavbar />
//         </div>

//         <div className="fixed hidden md:flex justify-center items-center h-[50px] w-[520px] bottom-[20px] left-1/2 -translate-x-1/2 z-50">
//           <Navbar />
//         </div>

//         <div
//           className={`flex flex-col items-center pt-[45px] pb-[100px] gap-[2px] md:gap-10 w-full ${inter.className}`}
//         >
//           <div className="container mx-auto px-4 py-12">
//             <h1 className="text-5xl md:text-6xl font-bold text-center mb-2 flex items-center justify-center gap-[20px] md:gap-[30px]">
//               <Headset className="md:h-[60px] h-[50px] md:w-[60px] w-[50px]" />
//               Contact Us
//             </h1>

//             <div className="grid grid-cols-1 gap-20 max-w-6xl mx-auto pt-[40px]">
//               <div>
//                 <Card className="border border-black bg-white/10 text-white shadow-sm">
//                   <CardContent className="p-6 ">
//                     <h2 className="text-4xl font-semibold mb-6">
//                       Send us a message
//                     </h2>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label
//                           htmlFor="name"
//                           className="block text-sm font-medium mb-1"
//                         >
//                           Full Name
//                         </label>
//                         <Input
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Your name"
//                           required
//                           className="border-gray-300 focus:border-black focus:ring-black"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="email"
//                           className="block text-sm font-medium mb-1"
//                         >
//                           Email Address
//                         </label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your.email@example.com"
//                           required
//                           className="border-gray-300 focus:border-black focus:ring-black"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="subject"
//                           className="block text-sm font-medium mb-1"
//                         >
//                           Subject
//                         </label>
//                         <Input
//                           id="subject"
//                           name="subject"
//                           value={formData.subject}
//                           onChange={handleChange}
//                           placeholder="How can we help?"
//                           required
//                           className="border-gray-300 focus:border-black focus:ring-black"
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="message"
//                           className="block text-sm font-medium mb-1"
//                         >
//                           Message
//                         </label>
//                         <Textarea
//                           id="message"
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           placeholder="Tell us more about your inquiry..."
//                           rows={5}
//                           required
//                           className="border-gray-300 focus:border-black focus:ring-black"
//                         />
//                       </div>
//                       <Button
//                         type="submit"
//                         className="w-full bg-black hover:bg-gray-800 cursor-pointer text-white"
//                       >
//                         <Send className="mr-2 h-4 w-4" /> Send Message
//                       </Button>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </div>
//               <div className="space-y-20 flex items-center justify-center flex-col">
//                 <div className="h-[600px] w-full rounded-[20px] bg-transparent flex items-center justify-center z-[3]">
//                   <MapComponent latLng={latLng} />
//                 </div>

//                 <div className="h-[600px] md:h-[500px] w-full rounded-[20px] flex-col bg-white/10 flex items-start md:px-12 px-7 gap-[20px] justify-center">
//                   <h2 className="text-4xl font-semibold mb-6">
//                     Contact Information
//                   </h2>
//                   <div className="space-y-8">
//                     <div className="flex items-start w-full">
//                       <MapPin className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-medium">Address</h3>
//                         <p className="text-gray-500">
//                           Pranveer Singh Institute of Technology
//                           <br />
//                           Kanpur, Uttar Pradesh
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start">
//                       <Phone className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-medium">Phone</h3>
//                         <p className="text-gray-500">+91 9968359003</p>
//                       </div>
//                     </div>
//                     <div className="flex items-start">
//                       <Mail className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-medium">Email</h3>
//                         <p className="text-gray-500">
//                           kckmelectronics@gmail.com
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-start">
//                       <Clock className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-medium">Business Hours</h3>
//                         <p className="text-gray-500">
//                           Monday - Friday: 9:00 AM - 6:00 PM
//                           <br />
//                           Saturday: 10:00 AM - 4:00 PM
//                           <br />
//                           Sunday: Closed
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="relative md:top-[30px] top-[120px] h-[400px] md:h-[250px] w-full border-t-2 border-white/20 flex items-center pt-[0px] justify-start flex-col">
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;


"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import emailjs from "@emailjs/browser";
import MobileNavbar from "../components/mobileNavbar.jsx";
import Footer from "../components/footer.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, Headset } from "lucide-react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Exo_2, Iceland, Inter } from "next/font/google";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/mapContainer.jsx"), {
  ssr: false,
});

const iceland = Iceland({ subsets: ["latin"], weight: "400" });
const exo2 = Exo_2({ subsets: ["latin"], weight: "300" });
const inter = Inter({ subsets: ["latin"], weight: "700" });

const Products = () => {
  useEffect(() => {
    document.body.style.overflowY = "auto";
    // emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, 
      )
      .then(
        () => {
          toast.success("Thanks for Contacting Us...      We will get to you soon.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const [latLng, setLatLng] = useState({
    lat: 26.449530871109715,
    lng: 80.19259172671372,
  });

  return (
    <>
      <div className="relative w-full bg-black text-white overflow-x-hidden">
        <ToastContainer />
        <div className="fixed top-[0px] h-[60px] w-dvw backdrop-blur-[5px] z-[4]">
          <MobileNavbar />
        </div>

        <div className="fixed hidden md:flex justify-center items-center h-[50px] w-[520px] bottom-[20px] left-1/2 -translate-x-1/2 z-50">
          <Navbar />
        </div>

        <div className={`flex flex-col items-center pt-[45px] pb-[100px] gap-[2px] md:gap-10 w-full ${inter.className}`}>
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-2 flex items-center justify-center gap-[20px] md:gap-[30px]">
              <Headset className="md:h-[60px] h-[50px] md:w-[60px] w-[50px]" />
              Contact Us
            </h1>

            <div className="grid grid-cols-1 gap-20 max-w-6xl mx-auto pt-[40px]">
              <div>
                <Card className="border border-black bg-white/10 text-white shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-4xl font-semibold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          required
                          className="border-gray-300 focus:border-black focus:ring-black"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black hover:bg-gray-800 cursor-pointer text-white flex justify-center items-center gap-2"
                      >
                        {loading ? (
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-20 flex items-center justify-center flex-col">
                <div className="h-[600px] w-full rounded-[20px] bg-transparent flex items-center justify-center z-[3]">
                  <MapComponent latLng={latLng} />
                </div>

                <div className="h-[600px] md:h-[500px] w-full rounded-[20px] flex-col bg-white/10 flex items-start md:px-12 px-7 gap-[20px] justify-center">
                  <h2 className="text-4xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-8">
                    <div className="flex items-start w-full">
                      <MapPin className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-500">
                          Pranveer Singh Institute of Technology
                          <br />
                          Kanpur, Uttar Pradesh
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-500">+91 9968359003</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-500">kckmelectronics@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-gray-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="text-gray-500">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:top-[30px] top-[120px] h-[400px] md:h-[250px] w-full border-t-2 border-white/20 flex items-center pt-[0px] justify-start flex-col">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

