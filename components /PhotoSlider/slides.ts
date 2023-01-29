export const Slides = [
  {
    url: "/icons/slider/slider1.webp",
  },
  {
    url: "/icons/slider/slider2.webp",
  },
  {
    url: "/icons/slider/slider3.webp",
  },
  {
    url: "/icons/slider/slider4.webp",
  },
  {
    url: "/icons/slider/slider5.webp",
  },
  {
    url: "/icons/slider/slider6.webp",
  },
];

export interface Slide {
  url: string;
}

export interface PhotoSliderProps {
  slides: Slide[];
}
