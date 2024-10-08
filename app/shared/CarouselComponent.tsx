import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import React from "react";

interface Data {
  id: number;
  content: string;
}

interface CarouselComponentProps {
  currentIndex: number;
  items: Data[];
  prevSlide: () => void;
  nextSlide: () => void;
}

const CarouselComponent = ({ currentIndex, items }: CarouselComponentProps) => {
  return (
    <div className=" bg-gradient-to-r relative overflow-hidden h-[80vh]">
      <AnimatePresence>
        <motion.div
          key={items[currentIndex].id}
          initial={{ y: 100, opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
          exit={{ y: -100, opacity: 0, scale: 0.8, rotate: -10 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute w-full h-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-lg rounded-lg"
        >
          <h2 className="w-[50%] font-bold">{items[currentIndex].content}</h2>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="flex flex-col space-y-0 md:gap-1 lg:gap-2">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={
                index === currentIndex
                  ? { scale: 1.2, opacity: 1 }
                  : { scale: 1, opacity: 0.5 }
              }
              transition={{ duration: 0.5 }}
              data-testid="carousel-dot"
            >
              {index === currentIndex ? (
                <GoDot key={item.id} className="text-2xl text-white" />
              ) : (
                <GoDotFill key={item.id} className="text-2xl text-white" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
