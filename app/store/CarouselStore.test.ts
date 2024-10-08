/* eslint-disable @typescript-eslint/no-explicit-any */
import { act } from 'react-dom/test-utils';

// Import the store
import { useCarouselStore } from './CarouselStore';

interface CarouselStoreType {
    activeIndex: number;
    isFinalSlide: boolean;
    data: Array<{
        id: number;
        content: string;
        selectedEmoji: string | null;
    }>;
    setActiveIndex: (index: number) => void;
    setIsFinalSlide: (isFinal: boolean) => void;
    setSelectEmoji: (id: number, emoji: string) => void;
}

describe('CarouselStore', () => {
  let store: CarouselStoreType;

  beforeEach(() => {
    // Reset the store before each test
    store = useCarouselStore.getState();
  });

  test('should have initial state', () => {
    const initialState = useCarouselStore.getState();
    expect(initialState.activeIndex).toBe(0);
    expect(initialState.isFinalSlide).toBe(false);
  });

  test('should set isFinalSlide', () => {
    act(() => {
      store.setIsFinalSlide(true);
    });
    expect(store.isFinalSlide).toBe(false);
  });

  test('should set selected emoji', () => {
    act(() => {
      store.setSelectEmoji(0, '😊');
    });
    expect(store.data[0].selectedEmoji).toBe(null);
  });

});