"use client";
import React from "react";
import { GiBurningBook } from "react-icons/gi";
import { useCarouselStore } from "../../store/CarouselStore";
import CarouselComponent from "../../shared/CarouselComponent"

const LeftPanel = () => {
  const items = useCarouselStore((state) => state.data);
  const currentIndex = useCarouselStore((state) => state.activeIndex);

  const setCurrentIndex = useCarouselStore((state) => state.setActiveIndex);
  const setIsFinalSlide = useCarouselStore((state) => state.setIsFinalSlide);

  const nextSlide = () => {
    if (currentIndex === items.length - 1) {
      setIsFinalSlide(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
  };

  return (
    <div className="flex flex-col w-[50%] h-[100vh] max-1050:w-full max-1050:h-[70vh] bg-[#6B54FE] p-4 sm:p-8 relative">
      <GiBurningBook className="text-4xl text-white" />
      <CarouselComponent
        currentIndex={currentIndex}
        items={items}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
};

export default LeftPanel;
