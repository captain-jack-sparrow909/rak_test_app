# Carousel Application

This is a [Next.js](https://nextjs.org) project that implements a carousel component with animated transitions using [Framer Motion](https://www.framer.com/motion/). The application is styled with [Tailwind CSS](https://tailwindcss.com) and uses custom fonts.

## Packages Used

This application uses the following packages:

- `framer-motion`: `^11.11.1`
- `zustand`: `^5.0.0-rc.2`
- `reactjs-emojis`: `^1.0.4`
- `react-loader-spinner`: `^6.1.6`
- `react-icons`: `^5.3.0`
- `jest`: `^29.7.0` (for testing)
- `tailwindcss`: `^3.4.1`

## Application Structure

I have custom built the Carousel component using React/Next.js, Tailwind, and Framer Motion for animating the transition. The main page is composed of 2 Panels: `LeftPanel` and `RightPanel`.

- **LeftPanel**: Contains the carousel and the questions.
- **RightPanel**: Contains the emojis to react to the questions.

State of the application is managed through Zustand.

Once you complete the questions, you're moved to the `SummarySlide`, which contains all the questions and their respective answers. Upon clicking the submit button, a mock API request is sent which waits for 2 seconds. During that time, a loading spinner is shown. Upon successful completion of the API request, you are moved to the Submit page.

## Testing

Test cases are written for each component. To run the test cases, run: 
<br>`npm run test` 
<br>you will get the test cases execution + coverage.

```bash
npm run test    //to run test cases
npm run dev     //to run server locally
```


## LIVE APPLICATION
[LIVE APP](https://jabir-khan-rak-test-app.vercel.app/)