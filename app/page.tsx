"use client"
import { AnimatePresence, motion } from "framer-motion";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { useCarouselStore } from "./store/CarouselStore";
import SummarySlide from "./components/SummarySlide/SummarySlide";

export default function Home() {
  const isFinalSlide = useCarouselStore((state) => state.isFinalSlide);
  return (
    <div className="flex h-screen w-screen flex-row font-[family-name:var(--font-geist-sans)]">
      <AnimatePresence>
        {isFinalSlide ? (
          <motion.div
            key="summary-slide"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <SummarySlide />
          </motion.div>
        ) : (
          <>
            <LeftPanel />
            <RightPanel />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
