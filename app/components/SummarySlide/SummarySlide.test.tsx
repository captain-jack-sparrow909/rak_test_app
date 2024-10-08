/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import SummarySlide from './SummarySlide';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

// Mocking next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
  }));

// Mocking framer-motion components for tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children} : any) => <div>{children}</div>
  },
  AnimatePresence: ({ children }: any) => <div>{children}</div>,
}));

describe('CarouselComponent', () => {
  const data = [
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
    }];
  const currentIndex = 0;


  //mocking the useCarouselStore hook
  jest.mock('../../store/CarouselStore', () => ({
    useCarouselStore: jest.fn(() => ({
      data,
      activeIndex: currentIndex,
      setActiveIndex: jest.fn(),
      setIsFinalSlide: jest.fn(),
    })),
  }));


  test('renders carousel component and matches snapshot', () => {
    mockRouter.setCurrentUrl('/');
    render(
        <RouterContext.Provider value={mockRouter}>
        <SummarySlide />
      </RouterContext.Provider>
        );
    expect(screen).toMatchSnapshot();
  });

});
