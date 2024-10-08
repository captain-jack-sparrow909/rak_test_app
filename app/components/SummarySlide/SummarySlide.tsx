"use client";
import React from "react";
import { useCarouselStore } from "../../store/CarouselStore";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ApiRequest } from "../../services/Api";
import { useState } from "react";
import { Bars } from "react-loader-spinner";

const QuestionSlide = ({ item }: { item: string }) => {
  return (
    <div className="flex items-start">
      <VscDebugBreakpointDataUnverified size={30} className="white inline" />
      <h2 className="font-bold inline">{item}</h2>
    </div>
  );
};

const SummarySlide = () => {
  const items = useCarouselStore((state) => state.data);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const navigateToSubmitPage = async () => {
    setIsLoading(true);
    await ApiRequest();
    setIsLoading(false);
    router.push("/SubmitPage");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center bg-[#6B54FE] items-center w-full h-full">
        <Bars
          height="160"
          width="160"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={isLoading}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#6B54FE] p-8 h-full w-full flex flex-col items-center gap-2">
      <h2 className="font-bold text-4xl">SUMMARY</h2>
      <div className="flex flex-col border-white border-2 rounded-md p-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="text-white text-2xl max-w-[88%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.3 }}
          >
            <QuestionSlide item={item.content} />
            <h6 className="pl-8 text-[#a5a5a5]">
              {item.selectedEmoji !== null ? item?.selectedEmoji : ""}
            </h6>
          </motion.div>
        ))}
      </div>
      <button
        className="bg-white text-[#6B54FE] font-bold rounded-md p-2 mt-4 w-[8rem]"
        onClick={() => navigateToSubmitPage()}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default SummarySlide;
