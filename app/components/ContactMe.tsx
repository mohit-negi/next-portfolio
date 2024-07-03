"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const contactInfo = {
	phone: "+91 6283461635",
	email: "negi.astute@gmail.com",
	address: "Chandigarh,India",
}
const ContactMe = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((formData) => {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-bold mb-8 tracking-wider">Get in Touch</h2>
      
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-12">
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <a href="tel:+918850767392" className="flex items-center space-x-3 group">
              <PhoneIcon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
              <span className="group-hover:text-indigo-300 transition-colors duration-300">{contactInfo.phone}</span>
            </a>
            <a href="mailto:prathamesh.chavan216@gmail.com" className="flex items-center space-x-3 group">
              <EnvelopeIcon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
              <span className="group-hover:text-indigo-300 transition-colors duration-300">{contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-6 w-6 text-indigo-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={onSubmit} 
          className="flex-1 space-y-4"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactMe;