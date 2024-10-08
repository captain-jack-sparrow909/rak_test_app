"use client";
import { motion } from "framer-motion";

const SubmitPage = () => {
  return (
    <motion.div
      className="bg-[#6B54FE] p-4 sm:p-8 h-[100vh] w-[100vw] flex flex-col justify-center items-center text-2xl sm:text-4xl"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-[90%] sm:max-w-[50%] text-center font-bold">
        Thank you for the feedback, your response has been submitted
      </div>
    </motion.div>
  );
};

export default SubmitPage;
