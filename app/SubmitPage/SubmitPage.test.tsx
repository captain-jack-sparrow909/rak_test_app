/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import SubmitPage from './page';

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

  test('renders carousel component and matches snapshot', () => {
    mockRouter.setCurrentUrl('/');
    render(
        <RouterContext.Provider value={mockRouter}>
        <SubmitPage />
      </RouterContext.Provider>
        );
    expect(screen).toMatchSnapshot();
  });

});
