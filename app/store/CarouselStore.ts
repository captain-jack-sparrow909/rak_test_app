import { create } from "zustand";

interface Data {
  id: number;
  content: string;
  selectedEmoji: string | null;
}

type CarouselStore = {
  activeIndex: number;
  data: Data[];
  isFinalSlide: boolean;
  setActiveIndex: (index: number) => void;
  setIsFinalSlide: (isFinalSlide: boolean) => void;
  setSelectEmoji: (index: number, emoji: string) => void;
};

export const useCarouselStore = create<CarouselStore>((set) => ({
  activeIndex: 0,
  data: [
    {
      id: 1,
      content:
        "How would you rate your overall experience with RAK Bank's services?",
      selectedEmoji: null,
    },
    {
      id: 2,
      content:
        "How satisfied are you with the ease of accessing your RAK Bank accounts online or via the mobile app?",
      selectedEmoji: null,
    },
    {
      id: 3,
      content:
        "How would you rate the responsiveness and helpfulness of RAK Bank's customer service (branch, phone, or online)?",
      selectedEmoji: null,
    },
    {
      id: 4,
      content:
        "Were you satisfied with the speed and efficiency of your recent transaction (loan application, fund transfer, etc.) with RAK Bank?",
      selectedEmoji: null,
    },
    {
      id: 5,
      content:
        "How clear and understandable are RAK Bank's product and service offerings (e.g., fees, interest rates, terms)?",
      selectedEmoji: null,
    },
    {
      id: 6,
      content:
        "How likely are you to recommend RAK Bank to a friend or colleague based on your experience?",
      selectedEmoji: null,
    },
    {
      id: 7,
      content:
        "How would you rate your satisfaction with the personalized financial advice or solutions provided by RAK Bank?",
      selectedEmoji: null,
    },
    {
      id: 8,
      content:
        "How satisfied are you with the security measures RAK Bank has in place to protect your personal and financial information?",
      selectedEmoji: null,
    },
  ],
  setActiveIndex: (index) => set({ activeIndex: index }),
  isFinalSlide: false,
  setIsFinalSlide: (isFinalSlide) => set({ isFinalSlide }),
  setSelectEmoji: (index, emoji) =>
    set((state) => ({
      data: state.data.map((item, i) =>
        i === index ? { ...item, selectedEmoji: emoji } : item
      ),
    })),
}));
