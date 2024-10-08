"use client";
import { useCarouselStore } from "@/app/store/CarouselStore";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Emoji from "reactjs-emojis";

const RightPanel = () => {
  const setCurrentIndex = useCarouselStore((state) => state.setActiveIndex);
  const setIsFinalSlide = useCarouselStore((state) => state.setIsFinalSlide);
  const setSelectEmoji = useCarouselStore((state) => state.setSelectEmoji);
  const items = useCarouselStore((state) => state.data);
  const currentIndex = useCarouselStore((state) => state.activeIndex);

  const [emojiSize, setEmojiSize] = useState("64");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setEmojiSize("32"); // Small screens
      } else if (window.innerWidth < 768) {
        setEmojiSize("48"); // Medium screens
      } else {
        setEmojiSize("64"); // Large screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [clickedEmoji, setClickedEmoji] = useState<string | null>(null);
  const [label, setLabel] = useState<string | null>(null);

  const nextSlide = () => {
    if (currentIndex === items.length - 1) {
      setIsFinalSlide(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handleClick = (emoji: string, label: string) => {
    setClickedEmoji(emoji);
    setSelectEmoji(currentIndex, label);
    setLabel(label);
    setTimeout(() => {
      setClickedEmoji(null);
      setLabel(null);
      nextSlide();
    }, 1200);
  };

  return (
    <div className="flex flex-row w-[50%] h-full bg-white max-1050:w-full max-1050:h-[30%] justify-center items-center gap-[3rem] sm:gap-[5rem] md:gap-[7rem] max-380:gap-[1rem]">
      <motion.div
        className="cursor-pointer rounded-full p-2"
        animate={
          clickedEmoji === "thumbsup"
            ? { scale: 1.2, backgroundColor: "#fcd34d" }
            : {}
        }
        transition={{ duration: 0.3 }}
        onClick={() => handleClick("thumbsup", "Satisfied")}
      >
        <Emoji name="thumbsup" size={emojiSize} />
      </motion.div>
      <motion.div
        className="cursor-pointer rounded-full p-2"
        animate={
          clickedEmoji === "thinking_face"
            ? { scale: 1.2, backgroundColor: "#fcd34d" }
            : {}
        }
        transition={{ duration: 0.3 }}
        onClick={() => handleClick("thinking_face", "Not Sure")}
      >
        <Emoji name="thinking_face" size={emojiSize} />
      </motion.div>
      <motion.div
        className="cursor-pointer rounded-full p-2"
        animate={
          clickedEmoji === "thumbsdown"
            ? { scale: 1.2, backgroundColor: "#fcd34d" }
            : {}
        }
        transition={{ duration: 0.3 }}
        onClick={() => handleClick("thumbsdown", "Dissatisfied")}
      >
        <Emoji name="thumbsdown" size={emojiSize} />
      </motion.div>
      <AnimatePresence>
        {label && (
          <motion.div
            className="absolute bottom-0 mb-4 text-lg font-bold text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RightPanel;
