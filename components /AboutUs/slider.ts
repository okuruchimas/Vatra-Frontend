export const AboutUsSlides = [
  {
    link: "/icons/imageSlider/img1.png",
    text:
      "Зустрілись митці та мисткині зі всієї України. Ми вирішили, що варто вертатись до театру, до мистецтва загалом, варто досліджувати, дякувати, підтримувати, рефлексувати \n" +
      "й взаємодіяти.\n",
  },
  {
    link: "/icons/imageSlider/img2.png",
    text:
      "Нас об'єднував єдиний дух жаги початку. Початку роботи над тим, що є вдячністю за кожен день, із яким ми стаємо ближче \n" +
      "до перемоги.\n",
  },
  {
    link: "/icons/imageSlider/img3.png",
    text: "Наші рефлексії, розказані одне одному стосовно переживання Першого Дня Війни, зачепили всіх.",
  },
  {
    link: "/icons/imageSlider/img4.png",
    text: "Тому за 3 дні, сконцентрувавши зусилля на творенні перформансу, в Міжнародний день театру ми представились Львову.",
  },
  {
    link: "/icons/imageSlider/img5.png",
    text: "З того часу й донині наш театр залишається на сторожі Культури.",
  },
];

export interface AboutUsSlide {
  link: string;
  text: string;
}

export interface AboutUsSliderProps {
  aboutUsSlides: AboutUsSlide[];
}
