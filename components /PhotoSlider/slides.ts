export const Slides = [
  {
    url: "/icons/slider/slider1.png",
  },
  {
    url: "/icons/slider/slider2.png",
  },
  {
    url: "/icons/slider/slider3.png",
  },
  {
    url: "/icons/slider/slider4.png",
  },
  {
    url: "/icons/slider/slider5.png",
  },
  {
    url: "/icons/slider/slider6.png",
  },
];

export interface Slide {
  url: string;
}

export interface PhotoSliderProps {
  slides: Slide[];
}
