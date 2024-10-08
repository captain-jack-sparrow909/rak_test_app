/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import CarouselComponent from './CarouselComponent';

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
  const nextSlide = jest.fn();
  const prevSlide = jest.fn();

  test('renders carousel component and matches snapshot', () => {
    render(
        <CarouselComponent 
          currentIndex={currentIndex}
            items={data}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
        />          );
    expect(screen).toMatchSnapshot();
  });

});
